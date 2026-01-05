function setup() {
  let message = "Button Clicked!";

  document.getElementById("btn").onclick = function () {
    document.getElementById("msg").innerText = message;
  };
}

setup();
