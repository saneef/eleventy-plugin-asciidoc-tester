const { pairedShortcode } = require("@11ty/eleventy-plugin-syntaxhighlight");

const options = {
  alwaysWrapLineHighlights: false,
  // eligible to change the default to \n in a new major version.
  lineSeparator: "<br>",
  preAttributes: {},
  codeAttributes: {},
};

module.exports = ({ node }) => {
  const level = node.getLevel() + 2;
  const title = node.getTitle();
  const style = node.getStyle();
  const content = node.getSource();

  let titleEl = "";
  if (title) {
    titleEl = `<h${level} class="listingblock-title">${title}</h${level}>`;
  }

  if (style === "source") {
    const lang = node.getAttribute("language");

    if (lang && lang !== "text") {
      const highlightedContent = pairedShortcode(content, lang, "", options);

      return `${titleEl}\n${highlightedContent}`;
    }
  }

  return `${titleEl}\n<pre>${content}</pre>`;
};
