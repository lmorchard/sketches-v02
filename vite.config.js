import { resolve } from "path";
import { defineConfig } from "vite";
import glob from "glob";

const sketchIndexes = glob.sync("sketches/**/index.html");

const hashSketchPath = (filename) =>
  filename.replace("/index.html", "").replace(/\//g, "-");

const rollupInput = sketchIndexes.reduce(
  (acc, filename) => ({
    ...acc,
    [hashSketchPath(filename)]: resolve(__dirname, filename),
  }),
  {
    index: "index.html",
  }
);

export default defineConfig({
  appType: "mpa",
  clearScreen: false,
  build: {
    rollupOptions: {
      input: rollupInput,
    },
  },
});
