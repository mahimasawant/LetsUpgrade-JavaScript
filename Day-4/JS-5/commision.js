function reward() {
  var commission;

  var salesValue = document.getElementById("sales").value;

  if (salesValue <= 5000) {
    commission = (salesValue * 2) / 100;
  } else if (5001 <= 10001) {
    commission = (salesValue * 5) / 100;
  } else if (10001 <= 20000) {
    commission = (salesValue * 7) / 100;
  } else salesValue > 20000;
  {
    commission = (salesValue * 1) / 100;
  }
  var commission = console.log(commission);
}
