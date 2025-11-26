const choice = ["piedra", "papel", "tijeras", "lagarto", "spock"];
const rules = {
  piedra: ["tijeras", "lagarto"],
  papel: ["piedra", "spock"],
  tijeras: ["papel", "lagarto"],
  lagarto: ["spock", "papel"],
  spock: ["tijeras", "piedra"]
};

const jugar = (userChoice) => {
  const sheldonChoice = choice[Math.floor(Math.random() * choice.length)];

  if (userChoice === sheldonChoice) {
    return `Tú elegiste: ${userChoice}, y Sheldon eligió: ${sheldonChoice}. ¡Empate!, prueba otra vez.`;
  }
  if (rules[userChoice].includes(sheldonChoice)) {
    return `Tú elegiste: ${userChoice}, y Sheldon eligió: ${sheldonChoice}. ¡Muy bien jugado, eres el campeón!`;
  }
  return `Tú elegiste: ${userChoice}, y Sheldon eligió: ${sheldonChoice}. ¡Perdiste contra Sheldon!`;
};

const mostrarResultado = (userChoice) => {
  const contenedorMensaje = document.getElementById('resultado');
  const mensaje = jugar(userChoice);
  contenedorMensaje.textContent = mensaje;
};





