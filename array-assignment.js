let subjects = [];
subjects[0] = "HTML";
subjects[1] = "CSS";
subjects[2] = "JavaScript";

function showArray() {
  document.getElementById("array").innerText =
    subjects.join(", ");
}
