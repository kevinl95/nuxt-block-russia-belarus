const { resolve } = require('path')

const Defaults = {
  tag: 'block-russia-belarus'
}

// CDN URL
const CDNURL = 'https://cdn.jsdelivr.net/gh/ob42/RussianBlocker/RussianBlocker.js'

module.exports = function nuxtYoutubeSubscribe (moduleOptions = {}) {
  const options = Object.assign({}, Defaults, this.options['youtube-subscribe'] || moduleOptions)

  // Set the desired component tag name
  options.tag = options.tag || Defaults.tag

  // Register our plugin and pass config options
  this.addPlugin({
    src: resolve(__dirname, './plugin.template.js'),
    fileName: 'RussianBlocker.js',
    options: options
  })

  // Add the RussianBlocker JavaScript to head
  this.options.head.script.push({
    hid: 'RussianBlocker',
    src: CDNURL,
    async: true,
    defer: true
  })
}

module.exports.meta = require('./../package.json')
