const correctAnswer = "París";
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".answer");

let attempts = 3;

for (const button of buttons) {
  button.addEventListener("click", function () {
    if (button.textContent === correctAnswer) {
      result.textContent = "✅ ¡Correcto!";
    } else {
      attempts--;
      if (attempts > 0) {
        result.textContent = `❌ Incorrecto. Te quedan ${attempts} intentos.`;
      } else {
        result.textContent = "💀 Has perdido. No te quedan intentos.";
      }
    }
  });
}
