const user = new Object();
user.name = "Anusha";
user.branch = "CSE";

function showUser() {
  document.getElementById("user").innerText =
    user.name + " - " + user.branch;
}
