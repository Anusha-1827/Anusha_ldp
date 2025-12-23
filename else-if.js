function grade() {
  let score = 85;
  let result;

  if (score >= 90) {
    result = "A Grade";
  } else if (score >= 75) {
    result = "B Grade";
  } else if (score >= 60) {
    result = "C Grade";
  } else {
    result = "Fail";
  }

  document.getElementById("grade").innerText = result;
}
