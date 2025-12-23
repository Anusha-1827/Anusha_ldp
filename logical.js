function check() {
  let age = 20;
  let hasID = true;

  document.getElementById("logic").innerText =
    (age >= 18 && hasID)
    ? "Allowed"
    : "Not Allowed";
}
