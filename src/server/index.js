import http from 'http'
import express from 'express'

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { title: 'FapDevs' })
})

server.listen(port, () => {
  console.log(`FapDevs Listen in Port ${port}`)
})
