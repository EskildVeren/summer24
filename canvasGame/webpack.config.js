const { watch } = require("fs");
const path = require("path");

module.exports = {
  mode: "development",
  watch: true,
  entry: "./javascript/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
