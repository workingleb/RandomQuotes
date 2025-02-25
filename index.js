import quotes from './quotes.js';

const quoteTextElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote: quoteText, author: quoteAuthor } = randomQuote;
  quoteTextElement.innerHTML = `"${quoteText}"`;
  quoteAuthorElement.textContent = quoteAuthor;
};

generateBtn.addEventListener('click', generateRandomQuote);
