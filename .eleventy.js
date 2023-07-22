const eleventyAsciidoc = require("eleventy-plugin-asciidoc");
const shoutExt = require("./asciidoc-extensions/shout.js");

const asciidoctor = require("asciidoctor").default();
const registry = asciidoctor.Extensions.create();

shoutExt.register(registry);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAsciidoc, {
    template_dir: `${__dirname}/asciidoc-templates`,
    extension_registry: registry,
  });

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  };
};
