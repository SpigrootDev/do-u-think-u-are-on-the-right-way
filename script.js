document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    if (user === "justi" && pass === "justi") {
      messageDiv.innerHTML = "Olivia(Halv) You won't get the second name maybe at some point in time. Explanation: Well I'm not into Olivia anymore, but I just kept her on the list, cause she's still cute.";
    } else {
      messageDiv.innerHTML = "Falscher Benutzername oder Passwort.";
    }
  });
});
