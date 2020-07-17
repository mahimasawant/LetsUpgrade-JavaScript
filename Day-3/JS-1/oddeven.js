function oddeven() {
  var num = document.getElementById("num").value;
  if (num % 2 == 0) {
    console.log("The entered num is " + num + " the number is even");
  } else {
    console.log("The entered num is " + num + " the number is odd");
  }
}
