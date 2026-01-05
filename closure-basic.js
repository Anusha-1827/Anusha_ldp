function counter() {
  let count = 0;   // outer function variable

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

function showCount() {
  document.getElementById("output").innerText =
    "Count: " + increment();
}
