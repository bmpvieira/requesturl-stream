var request = require('request')
var through = require('through2')

module.exports = function (options) {
  return through.obj(function (url, enc, next) {
    options.url = url
    request(options, (err, res, body) => {
      if (err) { throw err }
      this.push(body)
      next()
    })
  })
}
