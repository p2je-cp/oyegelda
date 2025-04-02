// Simple Weight Opinion
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
  <audio id="audioFemale">
    <source src="Oyegelda.ogg" type="audio/ogg">
    <source src="Oyegelda.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
  </audio>
  <audio id="audioMale">
    <source src="gymrat.ogg" type="audio/ogg">
    <source src="gymrat.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
  </audio>
`;

document.getElementById("weightForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.getElementById("gender").value;
  const audioFemale = document.getElementById("audioFemale");
  const audioMale = document.getElementById("audioMale");

  let message = "";

  if (weight > 0) {
    if (gender === "female" && weight >= 90) {
      message = "GORDA DETECTADA. LA LIPO NO SIRVE PARA LOS HIPOPÓTAMOS.";
      audioFemale.play(); // Reproduce el audio si es mujer y pesa más de 90 kg
    } else if (gender === "male" && weight >= 105) {
      message = "Eres hombre y pesas más de 105 kg. ¿Gymrat o necesitas ajustar tu dieta?";
      audioMale.play(); // Reproduce el audio si es hombre y pesa más de 105 kg
    } else {
      message = "Alto Larry.";
    }
  } else {
    message = "Por favor, ingresa un peso válido.";
  }

  document.getElementById("result").textContent = message;
});
