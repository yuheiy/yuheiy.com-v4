module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/.nojekyll')
  eleventyConfig.addPassthroughCopy('src/apple-touch-icon.png')
  eleventyConfig.addPassthroughCopy('src/CNAME')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')

  eleventyConfig.setBrowserSyncConfig({ ghostMode: false })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
