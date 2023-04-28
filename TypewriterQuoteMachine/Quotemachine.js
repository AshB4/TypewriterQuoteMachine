// Get quote and author elements
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");

// Get new quote button and add event listener
const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", getQuote);

// Get tweet quote button and add event listener
const tweetQuoteButton = document.getElementById("tweet-quote");
tweetQuoteButton.addEventListener("click", tweetQuote);

// Function to fetch a new quote from an API and display it
async function getQuote() {
  const apiUrl = "https://api.quotable.io/random"; // Replace with your own API URL

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    quoteText.textContent = data.content;
    quoteAuthor.textContent = `- ${data.author}`;
  } catch (error) {
    console.log("Error:", error);
  }
}

// Function to open a tweet window with the current quote
function tweetQuote() {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent.slice(2);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;

  window.open(tweetUrl, "_blank");
}

// Call getQuote() on page load
getQuote();
