import quotes from './quotes.js';

const quoteTextElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const toogleFavoriteBtn = document.getElementById('toogle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let randomIndex;

const generateRandomQuote = () => {
  if (toogleFavoriteBtn.hasAttribute('disabled')) {
    toogleFavoriteBtn.removeAttribute('disabled');
  }
  randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote: quoteText, author: quoteAuthor } = randomQuote;
  quoteTextElement.innerHTML = `"${quoteText}"`;
  quoteAuthorElement.textContent = quoteAuthor;
  // if (quotes[randomIndex].isFavorite === true) {
  //   toogleFavoriteBtn.textContent = 'Remove from favorites';
  // } else {
  //   toogleFavoriteBtn.textContent = 'Add to favorites';
  // }
  toogleFavoriteBtn.textContent =
    quotes[randomIndex].isFavorite === true
      ? 'Remove from favorites'
      : 'Add to favorites';
};

const toogleFavorite = () => {
  quotes[randomIndex].isFavorite = !quotes[randomIndex].isFavorite;
  console.log(randomIndex);
  console.log(quotes[randomIndex].isFavorite);
  // if (quotes[randomIndex].isFavorite === true) {
  //   toogleFavoriteBtn.textContent = 'Remove from favorites';
  // } else {
  //   toogleFavoriteBtn.textContent = 'Add to favorites';
  // }
  toogleFavoriteBtn.textContent =
    quotes[randomIndex].isFavorite === true
      ? 'Remove from favorites'
      : 'Add to favorites';
  if (quotes[randomIndex].isFavorite === true) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p>${quotes[randomIndex].quote}</p>
      <p class="author">${quotes[randomIndex].author}</p>
    `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(quotes[randomIndex].quote)) {
        card.remove();
      }
    });
  }
};

generateBtn.addEventListener('click', generateRandomQuote);
toogleFavoriteBtn.addEventListener('click', toogleFavorite);
