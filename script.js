let apiQuotes = [];

// Show new Quote
function newQuote() {
  // Pick a random qoute from apiQuotes array
  // Creeren van een random nummer van 0 tot het maximaal aantal items in de array van apiQuotes.
  // Math.floor zorgt ervoor dat er een nummer van 1 heel decimaal wordt gecreeert door het nummer naar boven af te ronden
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
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
