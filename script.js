const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const twitterBtn = document.getElementById('twitter-btn');
const nextQuoteBtn = document.getElementById('new-quote-btn');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show new Quote
function newQuote() {
  loading();
  // Pick a random qoute from apiQuotes array
  // Creeren van een random nummer van 0 tot het maximaal aantal items in de array van apiQuotes.
  // Math.floor zorgt ervoor dat er een nummer van 1 heel decimaal wordt gecreeert door het nummer naar boven af te ronden
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //  Check if author field is blank and replace it by quote unknown
  if(!quoteAuthor){
    quoteAuthor.textContent = 'Unkonwn Athor'
  } else {
    quoteAuthor.textContent = quote.author;
  }

  // Check Quote length to determain the styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete();
}


// Gebruik makend van de locat quotes.js file
// function newQuote() {
  //   // Pick a random qoute from apiQuotes array
  //   // Creeren van een random nummer van 0 tot het maximaal aantal items in de array van apiQuotes.
  //   // Math.floor zorgt ervoor dat er een nummer van 1 heel decimaal wordt gecreeert door het nummer naar boven af te ronden
  //   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  //   console.log(quote);
  // }


  // Get Quotes From API
  // With Async Fetch request within a try catch statment
  async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      //  fetch request
      //  De response value wordt pas gevuld als er dat is uit de const apiUrl
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      // Catch Error Here
    }
  }

  // //  Onload
  getQuotes();
  // newQuote();

  // Tweet Quote
  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
  }

  // Eventlisteners
  nextQuoteBtn.addEventListener('click', newQuote)
  twitterBtn.addEventListener('click', tweetQuote);
