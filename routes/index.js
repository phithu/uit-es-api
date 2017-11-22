var express = require('express');
var app = express();
var moment = require('moment-timezone');
var router = express.Router();
var path = require('path');
var examSheduleModel = require('../model/exam-schedule.model');
var logsModel = require('../model/logs.model');
var infoUpdateModel = require('../model/info-update.model');
app.use(express.static(path.join(__dirname, 'public')));
var XLSX = require('xlsx');
const dirExcel = '../excel/1.xlsx';
var formatTime = require('../format-time');

router.get('/', (req, res, next) => {
  res.render('index');
})

router.get('/download/android', (req, res, next) => {
  res.download(path.resolve(__dirname, '../public/android/uit-es.apk')); 
})


router.get('/logs', (req, res, next) => {
  logsModel.getLogsShow((err, result) => {
    if (err) {
      res.json({
        result: false,
        msg: `Error: ${err}`
      })
      return;
    }
    if (result && result.length > 0) {
      res.json({
        result: true,
        msg: 'success',
        data: result
      })
    } else {
      res.json({
        result: true,
        msg: `Danh sách rỗng`
      })
    }
  })
})

router.post('/student', (req, res, next) => {
  let idStudent = req.body['idStudent'];
  if (idStudent) {
    examSheduleModel.getStudentByIdStudent(idStudent, (err, result) => {
      if (err) {
        res.json({
          result: false,
          msg: `Error: ${err}`
        })
        return;
      }
      if (result && result.length > 0) {
       
        let time = Date.now();
        let idStudent = result[0].idStudent;
        logsModel.getStudentById(idStudent, (err, resultStu) => {
          if (err) {
            throw err;
          }
          if (resultStu) {
            logsModel.updateTime(resultStu['_id'], time, (err, result) => {
              if (err) {
                res.json({
                  result: false,
                  msg: `Error: ${err}`
                })
                return;
              }
            })
          } else {
            let logs = new logsModel({
              idStudent: idStudent,
              nameStudent: result[0].nameStudent,
              timeNumber: time,
              time: moment(time).tz('Asia/Ho_Chi_Minh').format('HH:mm:ss - DD/MM/YYYY')
            })
            logsModel.insertLogs(logs, (err, result) => {
              if (err) {
                throw err;
              }
            })
          }
        });
        let examSchedule = [];
        result.forEach((item) => {
          examSchedule.push(item.timeTable);
        })
        res.json({
          result: true,
          msg: 'success',
          data: {
            idStudent: result[0].idStudent,
            nameStudent: result[0].nameStudent,
            notes: result[0].notes,
            examSchedule: examSchedule
          }
        });
      } else {
        res.json({
          result: true,
          msg: `Lỗi: Sinh viên không tồn tại trong hệ thống.`
        })
      }
    })
  } else {
    res.json({
      result: true,
      msg: "Lỗi: Mã số sinh viên không hợp lệ."
    })
  }

})

router.post('/class', (req, res, next) => {
  let idClass = req.body.idClass;
  let room = req.body.room;
  if (idClass && room) {
    examSheduleModel.getAllStudentInRoom(idClass, room, (err, result) => {
      if (err) {
        res.json({
          result: false,
          msg: `Error: ${err}`
        })
        return;
      }
      if (result && result.length > 0) {
        let listStudent = [];
        result.forEach(item => {
          let studentItem = {
            nameStudent: item.nameStudent,
            idStudent: item.idStudent,
            orderNumber: item.timeTable.orderNumber
          };
          listStudent.push(studentItem);
        })
        res.json({
          result: true,
          msg: 'success',
          data: listStudent
        })

      } else {
        res.json({
          result: true,
          msg: `Lỗi: Không tìm thấy lớp thi của bạn.`
        })
      }
    })
  } else {
    res.json({
      result: false,
      msg: `Lỗi: Lớp thi hoặc phòng thi không hợp lệ.`
    })
  }
})

router.get('/info-update', (req, res, next) => {
  infoUpdateModel.getAllInfoUpdate((err, result) => {
    if (err) {
      res.json({
        result: false,
        msg: `Error: ${err}`
      })
      return;
    } if (result && result.length > 0) {
      res.json({
        result: true,
        msg: 'success',
        data: result
      })
    } else {
      res.json({
        result: true,
        msg: `Danh sách rỗng`
      })
    }
  })
})

module.exports = router;
