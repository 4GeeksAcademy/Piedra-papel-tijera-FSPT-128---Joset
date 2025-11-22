const choice = ["piedra", "papel", "tijeras", "lagarto", "spock"];
const rules = {
  piedra: ["tijeras", "lagarto"],
  papel: ["piedra", "spock"],
  tijeras: ["papel", "lagarto"],
  lagarto: ["spock", "papel"],
  spock: ["tijeras", "piedra"]
}

const jugar = (userChoice) => {
  const sheldonChoice = choice[Math.floor(Math.random() * choice.length)];

  console.log(`Tú elegiste: ${userChoice}`);
  console.log(`Sheldon eligió: ${sheldonChoice}`);

  if (userChoice === sheldonChoice) {
    console.log("¡Empate!, prueba otra vez.");
  } else if (rules[userChoice].includes(sheldonChoice)) {
    console.log("¡Muy bien jugado, eres el campeón!");
  } else {
    console.log("¡perdiste contra Sheldon!");
  }
}

