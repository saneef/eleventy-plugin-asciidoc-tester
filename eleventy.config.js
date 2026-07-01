import eleventyAsciidoc from "eleventy-plugin-asciidoc";
import { register as registerShout } from "./asciidoc-extensions/shout.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function async(eleventyConfig) {
  // Opts out for ignore using .gitIgnore
  // Otherwise can't include `src/pages`, which ignored in .gitignore
  // Use `.eleventyignore` to ignore files in Eleventy
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(eleventyAsciidoc, {
    template_dir: `${__dirname}/asciidoc-templates`,
    configure_extension_registry: (registry) => {
      registerShout(registry);
    },
  });

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  };
}
