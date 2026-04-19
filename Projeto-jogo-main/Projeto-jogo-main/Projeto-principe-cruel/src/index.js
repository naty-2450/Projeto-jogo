const player1 = {
  NOME: "Jude",
  VELOCIDADE: 4,
  FORÇA: 4,
  RESISTENCIA: 4,
  PONTOS: 0,
};

const player2 = {
  NOME: "Cardan",
  VELOCIDADE: 5,
  FORÇA: 3,
  RESISTENCIA: 4,
  PONTOS: 0,
};

const player3 = {
  NOME: "Madoc",
  VELOCIDADE: 3,
  FORÇA: 5,
  RESISTENCIA: 4,
  PONTOS: 0,
};

const player4 = {
  NOME: "Bomba",
  VELOCIDADE: 4,
  FORÇA: 3,
  RESISTENCIA: 5,
  PONTOS: 0,
};

const player5 = {
  NOME: "Barata",
  VELOCIDADE: 5,
  FORÇA: 2,
  RESISTENCIA: 5,
  PONTOS: 0,
};

const player6 = {
  NOME: "Taryn",
  VELOCIDADE: 3,
  FORÇA: 4,
  RESISTENCIA: 5,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "DESVIAR";
      break;
    case random < 0.66:
      result = "CONFRONTO";
      break;
    default:
      result = "RESISTENCIA";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`ROUND: ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "DESVIAR") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "RESISTENCIA") {
      totalTestSkill1 = diceResult1 + character1.RESISTENCIA;
      totalTestSkill2 = diceResult2 + character2.RESISTENCIA;

      await logRollResult(
        character1.NOME,
        "Resistencia",
        diceResult1,
        character1.RESISTENCIA
      );

      await logRollResult(
        character2.NOME,
        "Resistencia",
        diceResult2,
        character2.RESISTENCIA
      );
    }

      else if (block === "CONFRONTO") {
      console.log(`⚔️ CONFRONTO entre ${character1.NOME} e ${character2.NOME}!`);

      // ATAQUE 1
      let attack1 = diceResult1 + character1.FORÇA;
      let defense2 = diceResult2 + character2.RESISTENCIA;

      console.log(`${character1.NOME} ATACOU ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "ataque",
        diceResult1,
        character1.FORÇA
      );

      await logRollResult(
        character2.NOME,
        "defesa",
        diceResult2,
        character2.RESISTENCIA
      );

      if (attack1 > defense2) {
        console.log(`${character2.NOME} perdeu 1 ponto!`);
        character2.PONTOS--;
      } else if (defense2 > attack1) {
        console.log(`${character2.NOME} defendeu!`);
      } else {
        console.log("Empate no ataque!");
      }

      // CONTRA-ATAQUE
      let counterAttack = diceResult2 + character2.FORÇA;
      let defense1 = diceResult1 + character1.RESISTENCIA;

      console.log(`${character2.NOME} CONTRA-ATACOU! 🔁`);

      await logRollResult(
        character2.NOME,
        "ataque",
        diceResult2,
        character2.FORÇA
      );

      await logRollResult(
        character1.NOME,
        "defesa",
        diceResult1,
        character1.RESISTENCIA
      );

      if (counterAttack > defense1) {
        console.log(`${character1.NOME} perdeu 1 ponto!`);
        character1.PONTOS--;
      } else if (defense1 > counterAttack) {
        console.log(`${character1.NOME} defendeu!`);
      } else {
        console.log("Empate no contra-ataque!");
      }
    }

    // pontuação só fora de confronto
    if (block !== "CONFRONTO") {
      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
      }
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a DISPUTA! Parabéns! `);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} venceu a DISPUTA! Parabéns! `);
  else console.log("A LUTA terminou em empate");
}

const readline = require("readline");

const players = [player1, player2, player3, player4, player5, player6];

function escolherPlayer(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    console.log("\nEscolha um jogador:");

    players.forEach((p, index) => {
      console.log(`${index + 1} - ${p.NOME}`);
    });

    rl.question(pergunta, (resposta) => {
      const index = Number(resposta) - 1;

      if (players[index]) {
        resolve(players[index]);
      } else {
        console.log("Escolha inválida, tentando novamente...");
        resolve(escolherPlayer(pergunta));
      }

      rl.close();
    });
  });
}

(async function main() {
  const jogador1 = await escolherPlayer("Digite o número do Player 1: ");
  const jogador2 = await escolherPlayer("Digite o número do Player 2: ");

  console.log(
    `\n🏁🚨 LUTA entre ${jogador1.NOME} e ${jogador2.NOME} começando...\n`
  );

  await playRaceEngine(jogador1, jogador2);
  await declareWinner(jogador1, jogador2);
})();