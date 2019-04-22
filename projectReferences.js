const fs = require('fs').promises
const { JSDOM } = require('jsdom')

const fetchStandarddesignunitPosts = async () => {
  const dom = await JSDOM.fromURL('https://standard.shiftbrain.com/atom.xml')
  const posts = [...dom.window.document.querySelectorAll('entry')]
    .filter((entryElement) => {
      const nameElement = entryElement.querySelector('author > name')
      return nameElement && nameElement.textContent === '安田祐平'
    })
    .map((entryElement) => {
      const title = entryElement.querySelector('title').textContent
      const url = entryElement.querySelector('link').getAttribute('href')
      return [title, url]
    })
  return posts.slice(0, 5)
}

const fetchYuheiblogPosts = async () => {
  const dom = await JSDOM.fromURL('https://yuheiy.hatenablog.com/feed')
  const posts = [...dom.window.document.querySelectorAll('entry')].map(
    (entryElement) => {
      const title = entryElement.querySelector('title').textContent
      const url = entryElement.querySelector('link').getAttribute('href')
      return [title, url]
    },
  )
  return posts.slice(0, 5)
}

const main = async () => {
  const postsByProject = await Promise.all([
    fetchStandarddesignunitPosts(),
    fetchYuheiblogPosts(),
  ])
  await fs.writeFile(
    'src/_data/referencesByProject.json',
    JSON.stringify(postsByProject),
  )
}

main().catch((error) => {
  process.exitCode = 1
  console.trace(error)
})
