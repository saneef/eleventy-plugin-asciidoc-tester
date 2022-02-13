const eleventyAsciidoc = require("eleventy-plugin-asciidoc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAsciidoc, {
    template_dir: `${__dirname}/asciidoc-templates`,
  });

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  };
};
