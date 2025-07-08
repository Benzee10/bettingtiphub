// js/predictions.js

// Fallback sample data
const defaultPredictions = [
  { match: "Liverpool vs Real Madrid", time: "21:00", tip: "Over 2.5 Goals" },
  { match: "Bayern vs Dortmund", time: "18:30", tip: "BTTS" },
  { match: "PSG vs Marseille", time: "20:00", tip: "Home Win" }
];

// Check and initialize localStorage if empty
if (!localStorage.getItem("predictions")) {
  localStorage.setItem("predictions", JSON.stringify(defaultPredictions));
}

// Load predictions from localStorage
const predictions = JSON.parse(localStorage.getItem("predictions") || "[]");

const container = document.getElementById("predictions-container");

// Render each prediction
if (predictions.length === 0) {
  container.innerHTML = "<p>No predictions available. Check back later!</p>";
} else {
  predictions.forEach(({ match, time, tip }) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>⚽ ${match}</h3>
      <p>⏰ ${time}</p>
      <p>🎯 Tip: <strong>${tip}</strong></p>
    `;
    container.appendChild(card);
  });
}
