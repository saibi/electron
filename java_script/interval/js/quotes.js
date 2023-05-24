const quotes = [
  {
    quote: "It's kind of fun to do the impossible.",
    author: "Walt Disney (1901 - 1966)",
  },
  {
    quote:
      "Trumpet in a herd of elephants; crow in the company of cocks; bleat in a flock of goats.",
    author: "Malayan Proverb",
  },
  {
    quote:
      "If two men agree on everything, you may be sure that one of them is doing the thinking.",
    author: "Lyndon B. Johnson (1908 - 1973)",
  },
  {
    quote: "The undertaking of a new action brings new strength.",
    author: "Evenius",
  },
  {
    quote:
      "Philosophers say a great deal about what is absolutely necessary for science, and it is always, so far as one can see, rather naive, and probably wrong.",
    author: "Richard Feynman (1918 - 1988)",
  },
  {
    quote:
      "I disapprove of what you say, but I will defend to the death your right to say it.",
    author: "Voltaire (1694 - 1778)",
  },
  {
    quote:
      "We hate some persons because we do not know them; and we will not know them because we hate them.",
    author: "Charles Caleb Colton (1780 - 1832)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
