const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: {type: String, required: true},
  title: String
}, {
  timestamps: true,
});

module.exports = mongoose.model('Photo', photoSchema);