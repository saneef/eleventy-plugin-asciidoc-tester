const eleventyAsciidoc = require("eleventy-plugin-asciidoc");
const shoutExt = require("./asciidoc-extensions/shout.js");

module.exports = function (eleventyConfig) {
  // Opts out for ignore using .gitIgnore
  // Otherwise can't include `src/pages`, which ignored in .gitignore
  // Use `.eleventyignore` to ignore files in Eleventy
  eleventyConfig.setUseGitIgnore(false);

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
