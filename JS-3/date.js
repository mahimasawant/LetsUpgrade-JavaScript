Date.prototype.getFromFormat = function (format) {
  var yyyy = this.getFullYear().toString();
  format = format.replace(/yyyy/g, yyyy);
  var mm = (this.getMonth() + 1).toString();
  format = format.replace(/mm/g, mm[1] ? mm : "0" + mm[0]);
  var dd = this.getDate().toString();
  format = format.replace(/dd/g, dd[1] ? dd : "0" + dd[0]);
  return format;
};

d = new Date();
var date = d.getFromFormat("yyyy-mm-dd");
document.write("Date Formats");
document.write("</br>");
document.write(date);

var date1 = d.getFromFormat("yyyy/mm/dd");
document.write("</br>");
document.write(date1);
