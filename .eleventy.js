const { JSDOM } = require('jsdom')

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('h3Icon', (content) => {
    const containerElement = JSDOM.fragment(`<div>${content}</div>`)
      .firstElementChild
    containerElement
      .querySelectorAll('section#interests h3')
      .forEach((headingElement) => {
        headingElement.innerHTML = `<svg viewBox="0 0 24 24"><use xlink:href="#icon-label"></svg>${
          headingElement.innerHTML
        }`
      })
    containerElement
      .querySelectorAll('section#projects h3')
      .forEach((headingElement) => {
        headingElement.innerHTML = `<svg viewBox="0 0 24 24"><use xlink:href="#icon-flag"></svg>${
          headingElement.innerHTML
        }`
      })
    return containerElement.innerHTML
  })

  eleventyConfig.addPassthroughCopy('src/.nojekyll')
  eleventyConfig.addPassthroughCopy('src/CNAME')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')

  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    ghostMode: false,
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
