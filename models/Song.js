var mongoose = require('mongoose')
songSchema = new mongoose.Schema({
  title: {type: String, required: true},
  rating: {type: Number, default: 2.5},
  lyrics: {type: String, default: "N/A"},
  artist: {type: String, default: "Annymous"}
}, {timestamps: true})

var Song = mongoose.model('Song', songSchema)

module.exports = Song
