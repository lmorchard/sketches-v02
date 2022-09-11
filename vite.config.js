import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import glob from "glob";
import cheerio from "cheerio";
import dateFns from "date-fns";

const DEFAULT_THUMBNAIL = "public/presentation-svgrepo-com.svg";

const sketchIndexes = glob.sync("sketches/**/index.html");

const hashSketchPath = (filename) =>
  filename.replace("/index.html", "").replace(/\//g, "-");

const metaContent = ($, name, defaultValue) =>
  $(`head meta[property='${name}']`).attr("content") || defaultValue;

const fetchSketchMetadata = (filepath) => {
  const indexStat = fs.statSync(filepath);
  const indexSrc = fs.readFileSync(filepath);
  const $ = cheerio.load(indexSrc);

  const href = filepath.replace("/index.html", ""); // path.dirname(path.relative(path.dirname(filePath), sketchPath)) + "/";
  const title = metaContent($, "og:title", $("head title").text());
  const date = new Date(
    metaContent($, "og:article:modified_time", indexStat.mtimeMs)
  );
  const metaImage = metaContent($, "og:image");
  const image = metaImage ? `${href}/${metaImage}` : `.${DEFAULT_THUMBNAIL}`;
  const description = metaContent($, "og:description");

  return { href, title, image, date, description };
};

const sketchesInput = sketchIndexes.reduce(
  (acc, filename) => ({
    ...acc,
    [hashSketchPath(filename)]: resolve(__dirname, filename),
  }),
  {}
);

const sketches = sketchIndexes.map((filename) => ({
  filename,
  metadata: fetchSketchMetadata(filename),
}));

sketches.sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());

export default defineConfig({
  appType: "mpa",
  clearScreen: false,
  build: {
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      input: {
        ...sketchesInput,
        index: "index.html",
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/@pixi")) return "pixi";
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
  plugins: [
    ViteEjsPlugin((viteConfig) => {
      return {
        root: viteConfig.root,
        base: viteConfig.base,
        sketchIndexes,
        sketches,
      };
    }),
  ],
});
