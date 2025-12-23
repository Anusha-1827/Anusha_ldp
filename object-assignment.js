const student = {};
student.name = "Anusha";
student.branch = "CSE";

function showStudent() {
  document.getElementById("student").innerText =
    student.name + " - " + student.branch;
}
