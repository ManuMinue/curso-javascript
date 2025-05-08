const container = document.getElementById("buttons-container");

for (let i = 1; i <= 5; ++i) {
  const btn = document.createElement("button");
  btn.textContent = "Botón " + i;

  btn.addEventListener("click", function () {
    alert("Clickeaste el botón número: " + i);
  });

  container.appendChild(btn);
}
