function add(a, b) {
  return a + b;
}

function calculate() {
  let result = add(4, 6);   // assignment
  document.getElementById("output").innerText =
    "Result: " + result;
}
