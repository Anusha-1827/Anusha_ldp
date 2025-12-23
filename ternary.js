function checkAge() {
  let age = 17;

  let result = (age >= 18) ? "Adult" : "Minor";
  document.getElementById("ageResult").innerText = result;
}
