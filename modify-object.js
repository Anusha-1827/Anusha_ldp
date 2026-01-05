const student = {
  name: "Anusha",
  age: 20
};

function modify() {
  student.age = 21;          
  student.city = "Tirupati"; 
  delete student.name;       

  document.getElementById("result").innerText =
    JSON.stringify(student);
}
