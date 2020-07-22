var num = prompt("Please enter number");
var b;
if (num != null) {
  document.getElementById(
    "number"
  ).innerHTML = `multiplication  table of ${num} is`;
  for (var i = 1; i <= 10; i++) {
    b = num * i;
    document.write(`${num} * ${i} =${b} <br>`);
  }
}
