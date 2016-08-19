var express = require('express')

var app = express()
var port = process.env.PORT || 3000

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', { title: 'FapDevs' })
})

var server = app.listen(port, function (err) {
  if (err) return console.log('Error'), process.exit(1)

  console.log('FapDevs Listen in Port ', port)
})