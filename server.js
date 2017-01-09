var express = require('express')
var app = express()
var mongoose = require('mongoose')
var logger = require('morgan')
var bodyParser = require('body-parser')
var apiRoutes = require('./routes/api.js')


mongoose.connect('mongodb://locahost/song-tribe', (err) => {
  console.log(err || "Connected to MongoDB (song-tribe)");
})


//middleware (): runs between request and response
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({message: "this is the root route..."})
})

app.use('/songs', apiRoutes)



app.listen(3000, (err) => {
  console.log(err || "server running on 3000.")
})
