// js/bookmakers.js

const defaultBookmakers = [
  {
    name: "1xBet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/1xbet_logo.svg/2560px-1xbet_logo.svg.png",
    bonus: "Get 200% welcome bonus up to ₦100,000!",
    link: "https://1xbet.ng/affiliate-link"
  },
  {
    name: "Betway",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Betway_logo.png",
    bonus: "Sign up and get ₦50,000 in free bets!",
    link: "https://betway.ng/affiliate-link"
  },
  {
    name: "Bet9ja",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Bet9ja_Logo.png/220px-Bet9ja_Logo.png",
    bonus: "100% bonus on your first deposit!",
    link: "https://bet9ja.com/affiliate-link"
  }
];

// Initialize if not already saved
if (!localStorage.getItem("bookmakers")) {
  localStorage.setItem("bookmakers", JSON.stringify(defaultBookmakers));
}

const bookmakers = JSON.parse(localStorage.getItem("bookmakers") || "[]");

const list = document.getElementById("bookmaker-list");

if (bookmakers.length === 0) {
  list.innerHTML = "<p>No bookmakers available yet.</p>";
} else {
  bookmakers.forEach(({ name, logo, bonus, link }) => {
    const card = document.createElement("div");
    card.className = "bookmaker-card";
    card.innerHTML = `
      <img src="${logo}" alt="${name}" class="bookmaker-logo" />
      <h3>${name}</h3>
      <p>${bonus}</p>
      <a href="${link}" target="_blank" class="btn-book">Join Now</a>
    `;
    list.appendChild(card);
  });
}
