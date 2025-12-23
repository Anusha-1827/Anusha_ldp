function day() {
  let day = 3;
  let result;

  switch (day) {
    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;
    case 3:
      result = "Wednesday";
      break;
    default:
      result = "Invalid Day";
  }

  document.getElementById("day").innerText = result;
}
