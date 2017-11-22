var moment = require('moment-timezone');

module.exports.convert_MMDDYYYY = (date) => {
    let days = date.substring(0, 2);
    let month = date.substring(3, 5);
    let year = date.substring(6, 10);
    return `${month}-${days}-${year}`;
}
module.exports.formatDate = (date, hours) => {
    // Replace 'h' by space white and add string is ':00'
    let hourFormat = hours.replace('h', '') + ':00';
    let dateFormat = this.convert_MMDDYYYY(date);
    return moment(new Date(dateFormat + ' ' + hourFormat)).tz('Asia/Ho_Chi_Minh').format('YYYY/MM/DD - HH:mm:ss');
}