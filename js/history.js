// js/history.js

const defaultHistory = [
  {
    date: "2025-07-07",
    match: "Arsenal vs Liverpool",
    tip: "Over 2.5",
    outcome: "Won"
  },
  {
    date: "2025-07-06",
    match: "Man Utd vs Chelsea",
    tip: "BTTS",
    outcome: "Lost"
  }
];

// Initialize fallback if empty
if (!localStorage.getItem("history")) {
  localStorage.setItem("history", JSON.stringify(defaultHistory));
}

const history = JSON.parse(localStorage.getItem("history") || "[]");

const tbody = document.getElementById("history-table-body");

if (history.length === 0) {
  tbody.innerHTML = "<tr><td colspan='4'>No history yet.</td></tr>";
} else {
  history.forEach(({ date, match, tip, outcome }) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${date}</td>
      <td>${match}</td>
      <td>${tip}</td>
      <td class="${outcome.toLowerCase()}">${outcome}</td>
    `;
    tbody.appendChild(tr);
  });
}
