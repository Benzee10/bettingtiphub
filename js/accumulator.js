// js/accumulator.js

const defaultAccumulator = [
  {
    match: "Chelsea vs Brighton",
    tip: "Over 2.5",
    odds: 1.70,
    link: "https://example.com/aff/chelsea"
  },
  {
    match: "Juventus vs Napoli",
    tip: "BTTS",
    odds: 1.60,
    link: "https://example.com/aff/juventus"
  },
  {
    match: "Barca vs Sevilla",
    tip: "Home Win",
    odds: 1.50,
    link: "https://example.com/aff/barca"
  },
  {
    match: "Man Utd vs Wolves",
    tip: "Over 1.5",
    odds: 1.40,
    link: "https://example.com/aff/manutd"
  }
];

// Initialize fallback data
if (!localStorage.getItem("accumulator")) {
  localStorage.setItem("accumulator", JSON.stringify(defaultAccumulator));
}

// Load data
const accumulator = JSON.parse(localStorage.getItem("accumulator") || "[]");

const container = document.getElementById("accumulator-container");
const betWrapper = document.getElementById("bet-now-wrapper");
const totalOddsEl = document.getElementById("total-odds");

if (accumulator.length === 0) {
  container.innerHTML = "<p>No accumulator tips available today.</p>";
} else {
  let totalOdds = 1;

  accumulator.forEach(({ match, tip, odds }) => {
    totalOdds *= parseFloat(odds);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>⚽ ${match}</h3>
      <p>🎯 Tip: <strong>${tip}</strong></p>
      <p>💰 Odds: ${odds}</p>
    `;
    container.appendChild(card);
  });

  // Show total combined odds
  totalOddsEl.innerHTML = `<h3>🔥 Total Combined Odds: <span style="color:#00e676">${totalOdds.toFixed(2)}</span></h3>`;

  // Deep-link "Bet Now" to first match link
  const firstLink = accumulator[0].link || "#";
  betWrapper.innerHTML = `
    <a href="${firstLink}" target="_blank" class="btn-bet-now">👉🏼 Bet Now</a>
  `;
}
