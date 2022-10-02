import * as PIXI from "pixi.js";
import { SmoothGraphics as Graphics } from "@pixi/graphics-smooth";
import { AdvancedBloomFilter, CRTFilter, RGBSplitFilter } from "pixi-filters";

export function init(...args) {
  return new ViewportPixi(...args);
}

export const autoSizedRenderer = (options = {}) => {
  const init = (world) => {
    const { parentId = "main" } = options;
    const parentNode = document.getElementById(parentId);
    const { clientWidth, clientHeight } = parentNode;

    const renderer = new PIXI.Renderer({
      width: clientWidth,
      height: clientHeight,
      antialias: true,
      autoDensity: true,
    });
    parentNode.appendChild(renderer.view);
    window.renderer = renderer;

    const filterStage = new PIXI.Container();

    const bloom = new AdvancedBloomFilter({
      threshold: 0.2,
      bloomScale: 1.5,
      brightness: 1.0,
      blur: 1.5,
      quality: 5,
    });

    filterStage.filters = [new PIXI.filters.FXAAFilter(), bloom];

    const backgroundGraphics = new PIXI.Graphics();
    const backgroundStage = new PIXI.Container();
    backgroundStage.addChild(backgroundGraphics);
    filterStage.addChild(backgroundStage);

    const stage = new PIXI.Container();
    stage.sortableChildren = true;
    filterStage.addChild(stage);

    const debugStage = new PIXI.Container();
    debugStage.sortableChildren = true;
    const debugGraphics = new PIXI.Graphics();
    debugStage.addChild(debugGraphics);
    filterStage.addChild(debugStage);

    const captureSnapshotPNG = () => {
      const { backgroundColor = 0x000000 } = options;
      var renderTexture = PIXI.RenderTexture.create({
        width: renderer.width,
        height: renderer.height,
      });
      backgroundGraphics.beginFill(backgroundColor);
      backgroundGraphics.drawRect(0, 0, renderer.width, renderer.height);
      renderer.render(filterStage, { renderTexture });
      var canvas = renderer.plugins.extract.canvas(renderTexture);
      window.open(canvas.toDataURL("image/png"));
    };

    Object.assign(world, {
      captureSnapshotPNG,
      renderer,
      filterStage,
      bloom,
      stage,
      debugStage,
      debugGraphics,
      backgroundGraphics,
    });
  };

  return (world) => {
    if (!world.renderer) init(world);

    const { renderer, stage, filterStage, debugStage, debugGraphics } = world;
    const { width, height } = renderer;
    const { clientWidth, clientHeight } = renderer.view.parentNode;

    stage.x = clientWidth / 2;
    stage.y = clientHeight / 2;

    debugStage.x = clientWidth / 2;
    debugStage.y = clientHeight / 2;

    if (clientWidth !== width || clientHeight !== height)
      renderer.resize(clientWidth, clientHeight);

    renderer.render(filterStage);

    debugGraphics.clear();

    return world;
  };
};

export const gridRenderer = (options = {}) => {
  const init = (world) => {
    const { stage } = world;
    world.gGrid = new Graphics();
    stage.addChild(world.gGrid);
  };

  return (world) => {
    const {
      gridSize = 50,
      gridLineWidth = 2.0,
      gridLineColor = 0xffffff,
      gridLineAlpha = 0.1,
      zoom = 1.0,
      camera = { x: 0, y: 0 },
    } = options;

    if (!world.gGrid) init(world);

    const {
      gGrid: g,
      renderer: { width, height },
    } = world;

    g.clear();

    const lineWidth = gridLineWidth; // 2 * (1 / zoom);

    const visibleWidth = Math.floor(width / zoom);
    const visibleHeight = Math.floor(height / zoom);
    const visibleLeft = 0 - visibleWidth / 2 + camera.x;
    const visibleTop = 0 - visibleHeight / 2 + camera.y;

    const gridOffsetX = Math.abs(visibleLeft % gridSize);
    const gridOffsetY = Math.abs(visibleTop % gridSize);

    const xStart = visibleLeft + gridOffsetX;
    const xEnd = xStart + visibleWidth + gridOffsetX;
    const yStart = visibleTop + gridOffsetY;
    const yEnd = yStart + visibleHeight + gridOffsetY;

    g.lineStyle(lineWidth, gridLineColor, gridLineAlpha);
    for (let x = xStart; x < xEnd; x += gridSize) {
      g.moveTo(x, visibleTop);
      g.lineTo(x, visibleTop + visibleHeight);
    }
    for (let y = yStart; y < yEnd; y += gridSize) {
      g.moveTo(visibleLeft, y);
      g.lineTo(visibleLeft + visibleWidth, y);
    }

    return world;
  };
};
