const express = require('express')
const app = express()
const port = 3000

const host = require('./data/host.json')
const booking = require('./data/booking.json')
const shopping = require('./data/shopping.json')


app.get('/host', (req, res) => {
  const platform = req.query.platform
  const version = req.query.version

  res.send(host[platform][version])
})
app.get('/booking', (req, res) => {
  const platform = req.query.platform
  const version = req.query.version

  res.send(booking[platform][version])
})
app.get('/shopping', (req, res) => {
  const platform = req.query.platform
  const version = req.query.version

  res.send(shopping[platform][version])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
