module.exports = {
  tags: (data) => {
    const {
      tags,
      asciidocAttributes: { keywords = "" },
    } = data;

    const keywordsArray = keywords.split(" ");

    // If tags from front matter exists append to them
    if (Array.isArray(tags)) {
      return [...tags, ...keywordsArray];
    }

    return keywordsArray;
  },
};
