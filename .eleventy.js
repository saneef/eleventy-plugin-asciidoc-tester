const eleventyAsciidoc = require("eleventy-plugin-asciidoc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAsciidoc);

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  };
};
