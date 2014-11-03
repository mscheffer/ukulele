var options = require("./configuration.js").options
console.log("Ukulele 1.0d1\n", options)
var router = require(options.router.path).start(options.router)
var server = require(options.server.path).start(options.server, router)
