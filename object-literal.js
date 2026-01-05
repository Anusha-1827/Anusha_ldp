const person = {
  name: "Anusha",
  age: 21,
  city: "Tirupati",
  greet: function () {
    return "Hello, my name is " + this.name;
  }
};

function showPerson() {
  document.getElementById("output").innerText =
    person.greet() + ", Age: " + person.age;
}
