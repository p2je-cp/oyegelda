// Simple Weight Opinion
document.body.innerHTML = `
  <h1>Como está tu Peso</h1>
  <form id="weightForm">
    <label for="weight">Peso (kg):</label>
    <input type="number" id="weight" required><br><br>
    
    <label for="gender">Género:</label>
    <select id="gender">
      <option value="female">Femenino</option>
      <option value="male">Masculino</option>
    </select><br><br>
    
    <button type="submit">Enviar</button>
  </form>
  <p id="result"></p>
  <audio id="audioPlayer" src="oyegelda.mp3" preload="auto"></audio>
`;

document.getElementById("weightForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.getElementById("gender").value;
  const audioPlayer = document.getElementById("audioPlayer");

  let message = "";

  if (weight > 0) {
    if (gender === "female" && weight >= 90) {
      message = "GORDA DETECTADA. LA LIPO NO SIRVE PARA LOS HIPOPOTAMOS.";
      audioPlayer.play(); // Reproduce el audio si es mujer y pesa más de 90 kg
    } else if (gender === "male" && weight >= 105) {
      message = "Eres hombre y pesas más de 105 kg. ¿Gymrat o necesitas ajustar tu dieta?";
    } else {
      message = "Alto Larry.";
    }
  } else {
    message = "Por favor, ingresa un peso válido, no seas hdp.";
  }

  document.getElementById("result").textContent = message;
});