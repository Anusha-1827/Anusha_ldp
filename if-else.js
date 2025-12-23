function verify() {
  let marks = 35;

  if (marks >= 40) {
    document.getElementById("msg").innerText = "Pass";
  } else {
    document.getElementById("msg").innerText = "Fail";
  }
}
