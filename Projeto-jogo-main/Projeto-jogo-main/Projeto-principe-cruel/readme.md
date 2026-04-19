<h1>Desafio de projeto do Felipão: Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/cruelprince.gif" alt="Principe Cruel" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p>Jude</p>
      <img src="./docs/Jude.jpg" alt="Jude" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 4</p>
      <p>Força: 4</p>
      <p>Resistencia: 4</p>
    </td>

<td style="border: 1px solid black; text-align: center;">
      <p>Cardan</p>
      <img src="./docs/cardan.jpg" alt="Cardan" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 5</p>
      <p>Força: 3</p>
      <p>Resistencia: 4</p>
    </td>

<td style="border: 1px solid black; text-align: center;">
      <p>Madoc</p>
      <img src="./docs/madoc.webp" alt="Madoc" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Força: 5</p>
      <p>Resistencia: 4</p>
    </td>
  </tr>

  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p>Bomba</p>
      <img src="./docs/bomba.jpg" alt="Bomba" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 4</p>
      <p>Força: 3</p>
      <p>Resistencia: 5</p>
    </td>

<td style="border: 1px solid black; text-align: center;">
      <p>Barata</p>
      <img src="./docs/barata.jpg" alt="Barata" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 5</p>
      <p>Força: 2</p>
      <p>Resistencia: 5</p>
    </td>

<td style="border: 1px solid black; text-align: center;">
      <p>Taryn</p>
      <img src="./docs/taryn.jpg" alt="Taryn" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Força: 4</p>
      <p>Resistencia: 5</p>
    </td>
  </tr>
</table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<input type="checkbox" />
<label>O computador deve receber dois personagens para disputar a luta, cada um com seus atributos próprios</label>

<b>Rodadas:</b>

<ul>
  <li><input type="checkbox" /> <label>A luta acontece em 5 rodadas</label></li>
  <li><input type="checkbox" /> <label>A cada rodada, será sorteado um tipo de evento: DESVIAR, RESISTENCIA ou CONFRONTO</label>
    
    
 <li><input type="checkbox" /> <label><b>DESVIAR:</b> Os dois jogadores rolam um dado de 6 lados e somam com o atributo VELOCIDADE. Quem tiver o maior resultado ganha 1 ponto.</label></li>
      
 <li><input type="checkbox" /> <label><b>RESISTENCIA:</b> Cada jogador rola um dado de 6 lados e soma com RESISTENCIA. Caso o resultado seja maior ou igual a 6, o jogador ganha 1 ponto. Esse evento é individual (os dois podem ganhar ponto).</label></li>
      
  <li><input type="checkbox" /> <label><b>CONFRONTO:</b> O jogador 1 ataca somando FORÇA com o dado, enquanto o jogador 2 defende somando RESISTENCIA. Se o ataque for maior, o defensor perde 1 ponto. Em seguida ocorre um contra-ataque, invertendo os papéis.</label></li>
      

  </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" />
<label>Ao final das 5 rodadas, vence quem tiver mais pontos acumulados</label>