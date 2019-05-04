const path = require('path')
const fs = require('fs')
const fileType = require('file-type')
const { JSDOM } = require('jsdom')

const h3Types = {
  interests: 'interest',
  projects: 'project',
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('dataURI', (filePath) => {
    const buffer = fs.readFileSync(path.join('src', filePath))
    return `data:${fileType(buffer).mime};base64,${buffer.toString('base64')}`
  })

  eleventyConfig.addFilter('h3Type', (content) => {
    const containerElement = JSDOM.fragment(`<div>${content}</div>`)
      .firstElementChild
    Object.entries(h3Types).forEach(([sectionId, h3Type]) => {
      const iconHTML = `<svg viewBox="0 0 1 1"><use href="#icon-${h3Type}"></svg>`
      containerElement
        .querySelectorAll(`#${sectionId} > article h3`)
        .forEach((headingElement) => {
          headingElement.insertAdjacentHTML('afterbegin', iconHTML)
        })
    })
    return containerElement.innerHTML
  })

  eleventyConfig.addFilter('referenceType', (content) => {
    const fragment = JSDOM.fragment(`<div id="__container__">${content}</div>`)
    fragment
      .querySelectorAll('#__container__ > section > article ul li')
      .forEach((lIElement) => {
        const annotationNode = lIElement.firstChild
        const annotation = annotationNode.data
        annotationNode.remove()
        const referenceType = annotation.replace(/:$/, '')
        const iconHTML = `<svg viewBox="0 0 1 1"><use href="#icon-${referenceType}"></svg>`
        const anchorElement = lIElement.querySelector('a')
        anchorElement.insertAdjacentHTML('afterbegin', iconHTML)
        anchorElement.setAttribute('aria-describedby', `label-${referenceType}`)
      })
    return fragment.firstElementChild.innerHTML
  })

  eleventyConfig.addPassthroughCopy('src/.nojekyll')
  eleventyConfig.addPassthroughCopy('src/avator.png')
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
