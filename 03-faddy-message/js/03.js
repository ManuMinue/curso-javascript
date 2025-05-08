const user = "Alex";

showWelcome();

function showWelcome() {
  const output = document.getElementById("output");
  output.textContent = "Bienvenido, " + user + " 👋";
}
