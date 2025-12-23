function calculate() {
  let a = 10;
  let b = 3;

  document.getElementById("result").innerText =
    "Addition: " + (a + b) + "\n" +
    "Subtraction: " + (a - b) + "\n" +
    "Multiplication: " + (a * b) + "\n" +
    "Division: " + (a / b) + "\n" +
    "Modulus: " + (a % b);
}
