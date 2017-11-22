var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FormatTime = require('../format-time');
var examScheduleSchema = new Schema({
  idStudent: String,
  nameStudent: String,
  notes: String,
  timeTable:
  {
    _id: false,
    class: String,
    orderNumber: Number,
    date: String,
    shirt: String,
    hours: String,
    room: String,
    idClass: String,
    timeNumber: String
  }
}, { versionKey: false })
var examSchedule = mongoose.model('exam_schedule', examScheduleSchema, 'exam_schedule');
module.exports = examSchedule;
module.exports.insertExamSchedule = (examSchedule, callback) => {
  examSchedule.save(callback);
}
module.exports.getStudentByIdStudent = (idStudent, callback) => {
  examSchedule.find({ idStudent: idStudent }, callback)
  .sort({'timeTable.timeNumber': 1});
}

module.exports.getAllStudentInRoom = (idClass, room, callback) => {
  examSchedule.find({'timeTable.idClass': idClass, 'timeTable.room': room}, callback)
  .sort({
    'timeTable.orderNumber': 1
  })
}
module.exports.updateExamSchedule = (idStudent, data, callback) => {
  examSchedule.findOneAndUpdate({ idStudent: idStudent }, {
    $push: {
      timeTable: data
    }
  }, callback)
}
module.exports.checkExamScheduleExist = (idStudent, Item, callback) => {
  examSchedule.findOne({
    timeTable: {
      $elemMatch: {
        idClass: Item.idClass,
        room: Item.room
      }
    }, idStudent: idStudent
  }, callback)
}

// module.exports.getAll = (callback) => {
//   examSchedule.find(callback).sort({'timeTable.timeNumber': 1});
// }
