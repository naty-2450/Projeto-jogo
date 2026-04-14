// 🔴 CONFRONTO (combate)
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
    character2.PONTOS = Math.max(0, character2.PONTOS - 1);
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
    character1.PONTOS = Math.max(0, character1.PONTOS - 1);
  } else if (defense1 > counterAttack) {
    console.log(`${character1.NOME} defendeu!`);
  } else {
    console.log("Empate no contra-ataque!");
  }
}
