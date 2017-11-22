var mongoose = require('mongoose');
var moment = require('moment-timezone');
var Schema = mongoose.Schema;
var infoUpdateSchema = new Schema({
  title: String,
  link: String,
}, { versionKey: false })
var InfoUpdate = mongoose.model('info-update', infoUpdateSchema, 'info-update');
module.exports = InfoUpdate;

module.exports.insertInfoUpdate = (infoUpdate, callback) => {
  infoUpdate.save(callback);
}

module.exports.getAllInfoUpdate = (callback) => {
  InfoUpdate.find({}, { _id: false }, callback);
}