const yaml = require('js-yaml')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ public: '.' })

  eleventyConfig.addDataExtension('yml', (content) => {
    return yaml.safeLoad(content)
  })

  eleventyConfig.setBrowserSyncConfig({ ghostMode: false })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
