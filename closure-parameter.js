function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyBy2 = multiply(2);

function calculate() {
  document.getElementById("result").innerText =
    multiplyBy2(5);
}
