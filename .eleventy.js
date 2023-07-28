const eleventyAsciidoc = require("eleventy-plugin-asciidoc");
const shoutExt = require("./asciidoc-extensions/shout.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAsciidoc, {
    template_dir: `${__dirname}/asciidoc-templates`,
    configure_extension_registry: (registry) => {
      shoutExt.register(registry);
    },
  });

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  };
};
