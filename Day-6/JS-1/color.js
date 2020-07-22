var color = ["blue", "green", "yellow", "red", "black"];
function changeColor() {
  var randomcolor = color[Math.floor(Math.random() * color.length)];
  document.body.style.backgroundColor = randomcolor;
}
function start() {
  setInterval(changeColor, 5000);
}

start();
