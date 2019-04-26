const fs = require('fs').promises
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const CleanCSS = require('clean-css')
const touch = require('touch')

const postcssPlugins = [autoprefixer({ cascade: false })]

const processOptions = {
  from: 'src/main.css',
}

const optimizer = new CleanCSS({
  level: 2,
  returnPromise: true,
})

const main = async () => {
  const src = await fs.readFile('src/main.css')
  const postcssResult = await postcss(postcssPlugins).process(
    src,
    processOptions,
  )
  const optimized = await optimizer.minify(postcssResult.css)
  await fs.writeFile('src/_data/css.json', JSON.stringify(optimized.styles))

  // workaround
  // notify eleventy of this change
  await touch('src/_includes/home.njk')
}

main().catch((error) => {
  process.exitCode = 1
  console.trace(error)
})
