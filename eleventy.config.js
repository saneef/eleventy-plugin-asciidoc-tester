import eleventyAsciidoc from "eleventy-plugin-asciidoc";
import { shout } from "./asciidoc-extensions/shout.js";
import { Extensions } from "@asciidoctor/core";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const registry = Extensions.create();
registry.block(shout);

export default function async(eleventyConfig) {
  // Opts out for ignore using .gitIgnore
  // Otherwise can't include `src/pages`, which ignored in .gitignore
  // Use `.eleventyignore` to ignore files in Eleventy
  eleventyConfig.setUseGitIgnore(false);

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
}
