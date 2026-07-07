import eleventyAsciidoc from "eleventy-plugin-asciidoc";
import asciidoctorKroki from "asciidoctor-kroki";
import { Extensions } from "@asciidoctor/core";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { shout } from "./asciidoc-extensions/shout.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const registry = Extensions.create();
registry.block(shout);
asciidoctorKroki.register(registry);

export default function async(eleventyConfig) {
  // Opts out for ignore using .gitIgnore
  // Otherwise can't include `src/pages`, which ignored in .gitignore
  // Use `.eleventyignore` to ignore files in Eleventy
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(eleventyAsciidoc, {
    safe: "unsafe",
    template_dir: `${__dirname}/asciidoc-templates`,
    extension_registry: registry,
    attributes: {
      "kroki-fetch-diagram": true,
    },
  });

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  };
}
