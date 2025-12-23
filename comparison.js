function compare() {
  let a = 10;
  let b = "10";

  document.getElementById("compare").innerText =
    "a == b : " + (a == b) + "\n" +
    "a === b : " + (a === b);
}
