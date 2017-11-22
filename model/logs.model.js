var mongoose = require('mongoose');
var moment = require('moment-timezone');
var Schema = mongoose.Schema;
var logsSchema = new Schema({
  idStudent: String,
  nameStudent: String,
  timeNumber: Number,
  time: String
}, { versionKey: false })
var Logs = mongoose.model('logs', logsSchema, 'logs');
module.exports = Logs;
module.exports.insertLogs = (logs, callback) => {
  logs.save(callback);
}
module.exports.getLogsShow = (callback) => {
  Logs.find({}, { timeNumber: false }, callback)
  .limit(12)
  .sort({ timeNumber: -1 });
}
module.exports.getAllLogs = (callback) => {
  Logs.find({}, { timeNumber: false }, callback)
  .sort({ timeNumber: -1 });
}
module.exports.getStudentById = (idStudent, callback) => {
  Logs.findOne({ idStudent: idStudent }, callback);
}
module.exports.updateTime = (idObj, time, callback) => {
  Logs.findByIdAndUpdate(idObj, {
    $set: {
      time: moment(time).tz('Asia/Ho_Chi_Minh').format('HH:mm:ss - DD/MM/YYYY'),
      timeNumber: time
    }
  }, callback);
}
module.exports.deleteLogs = (idObj, callback) => {
  Logs.findByIdAndRemove(idObj, callback);
}
