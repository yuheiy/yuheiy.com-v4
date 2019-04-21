const fs = require('fs')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const gapProperties = require('postcss-gap-properties')
const CleanCSS = require('clean-css')
const touch = require('touch')

const isWatch = process.argv.slice(2).includes('--watch')

const postcssPlugins = [
  autoprefixer({ cascade: false }),
  gapProperties({ preserve: false }),
]

const processOptions = {
  from: 'src/main.css',
}

const optimizer = new CleanCSS({
  level: 2,
  returnPromise: true,
})

const buildCSS = async () => {
  try {
    const src = await fs.promises.readFile('src/main.css')
    const postcssResult = await postcss(postcssPlugins).process(
      src,
      processOptions,
    )
    const optimized = await optimizer.minify(postcssResult.css)
    await fs.promises.writeFile(
      'src/_data/css.json',
      JSON.stringify(optimized.styles),
    )

    // workaround
    // notify eleventy of this change
    await touch('src/_includes/home.njk')
  } catch (error) {
    if (!isWatch) {
      process.exitCode = 1
    }

    console.trace(error)
  }
}

if (isWatch) {
  fs.watchFile('src/main.css', { interval: 300 }, buildCSS)
}

buildCSS()
