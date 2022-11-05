function createGame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira 2">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira 1">
  </li>
  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>

            <ul>
            ${games}
            </ul>
        </div>

  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("suica", "07:00", "camaroes") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("japao", "10:00", "servia") +
      createGame("portugal", "13:00", "uruguai") +
      createGame("japao", "16:00", "hungria")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("brasil", "16:00", "camaroes") +
      createGame("colombia", "20:00", "hungria") +
      createGame("bots", "22:00", "burundi")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("brasil", "10:00", "camaroes") +
      createGame("argentina", "16:00", "gana") +
      createGame("suica", "20:00", "uruguai")
  )
