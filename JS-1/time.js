var myDate = new Date();
var myDay = myDate.getDay();

// weekdays
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.write("Today is : " + weekday[myDay]);
document.write("<br/>");

// get hour value.
var hours = myDate.getHours();
var suffix = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;
var minutes = myDate.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;
var myTime =
  hours + " " + suffix + " : " + minutes + " : " + myDate.getMilliseconds();
document.write("\tCurrent time is : " + myTime);
