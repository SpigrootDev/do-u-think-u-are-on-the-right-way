function checkLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  if (user === "justi" && pass === "justi") {
    messageDiv.textContent = "Willkommen, Justi!";
    messageDiv.style.color = "green";
  } else {
    messageDiv.textContent = "Falscher Benutzername oder Passwort.";
    messageDiv.style.color = "red";
  }
}