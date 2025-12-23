function login() {
  let username = "admin";
  let password = "1234";

  if (username === "admin") {
    if (password === "1234") {
      document.getElementById("status").innerText = "Login Successful";
    } else {
      document.getElementById("status").innerText = "Wrong Password";
    }
  } else {
    document.getElementById("status").innerText = "Invalid User";
  }
}
