const sass = require("sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");
  
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("assets/scripts/**.*");
  eleventyConfig.addPassthroughCopy("assets/audio/**.*");
  eleventyConfig.addPassthroughCopy("assets/image/**.*");


  // Creates the extension for use
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"

    // `compile` is called once per .scss file in the input directory
    compile: async function(inputContent) {
      let result = sass.compileString(inputContent);

      // This is the render function, `data` is the full data cascade
      return async (data) => {
        return result.css;
      };
    }
  });
};