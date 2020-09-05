const functions = require("firebase-functions")
const next = require("next")

var app = next({ dev: false, conf: { distDir: `./next` } })
var handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res))
})

