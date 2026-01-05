function secretCode() {
  let secret = "JS123";   // private variable

  return function () {
    return secret;
  };
}

const getSecret = secretCode();

function showSecret() {
  document.getElementById("secret").innerText =
    getSecret();
}
