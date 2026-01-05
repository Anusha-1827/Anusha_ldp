const student = {
  name: "Anusha",
  marks: {
    math: 90,
    science: 85
  }
};

function showMarks() {
  document.getElementById("marks").innerText =
    "Math: " + student.marks.math +
    ", Science: " + student.marks.science;
}
