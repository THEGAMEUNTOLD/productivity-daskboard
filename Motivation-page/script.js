const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const btn = document.querySelector(".new-quote");

let quotes = [];

async function loadQuotes() {
  try {
    quoteEl.textContent = "Loading quotes...";

    const response = await fetch("./quotes.json");
    quotes = await response.json();

    showRandomQuote();
  } catch (error) {
    quoteEl.textContent = "Unable to load quotes.";
    authorEl.textContent = "";
    console.error(error);
  }
}

function showRandomQuote() {
  if (!quotes.length) return;

  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  quoteEl.textContent = `"${quote.text}"`;
  authorEl.textContent = `— ${quote.author}`;
}

btn.addEventListener("click", showRandomQuote);

loadQuotes();
