// Requires
var menubar = require('menubar')
var pjson = require('./package.json');

var mb = menubar({
  index: __dirname + "/app/views/index.html",
  icon: __dirname + "/app/assets/img/omega_blue.png"
})

mb.on('ready', function ready () {
  console.log('Omega v'+pjson.version+" is running.")
})
