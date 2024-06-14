const text = document.getElementById("text");
const author = document.getElementById("author");
const new_quote = document.getElementById("new-quote");
const twitter = document.getElementById("tweet-quote");

new_quote.addEventListener("click", renderQuote);

const data = [
  {
    name: "- Jeff Bezos -",
    text: "Failure and invention are inseperable twins.To invent you have to experiment, and if you know in advance that its going to work, its not an experiment",
  },
  {
    name: "- Charles Mingus -",
    text: "Anyone can make the simple complicated.Creativity is making the complicated seem simple",
  },
  {
    name: "- Mark Manson -",
    text: "Iteration is the fundamental basis of all improvement",
  },
  {
    name: "- Lao Tzu -",
    text: "If you dont change your direction, you may end up where you are going",
  },
  {
    name: "- Theodor Suess Geisel -",
    text: "Fantasy is a necessary ingredient in living, its a way of looking at life through the wrong end of a telescope",
  },
  {
    name: "- Nelson Mandela -",
    text: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
  },
  {
    name: "- Wayne Dyer -",
    text: "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
  },
  {
    name: "- Theodore Roosevelt -",
    text: "Believe you can and you're halfway there.",
  },
  {
    name: "- Will Rogers -",
    text: "Even if you are on the right track, you'll get run over if you just sit there.",
  },
  {
    name: "- Winston Churchill -",
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  },
  {
    name: "- Tom Abbott -",
    text: "It's not just about being better. It's about being different. You need to give people a reason to choose your business. ",
  },
  {
    name: "- Eric Hoffer -",
    text: "The leader has to be practical and a realist yet must talk the language of the visionary and the idealist.",
  },
  {
    name: "- John Maxwell -",
    text: "The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.",
  },
  {
    name: "- Babe Ruth -",
    text: "The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime.",
  },
  {
    name: "- Harry Truman -",
    text: "It is amazing what you can accomplish if you do not care who gets the credit.",
  },
  {
    name: "- Mother Teresa -",
    text: "I can do things you cannot, you can do things I cannot: together we can do great things.",
  },
];

const updateTweetLink = (quote) => {
  const url = `https://www.twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}"-${quote.name}`
  )}`;
  twitter.href = url;
};

const setQuote = (quote) => {
  text.innerText = quote.text;
  author.innerText = quote.name;
  updateTweetLink(quote);
};

const randomQuote = () => {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
};

function renderQuote() {
  const data = randomQuote();
  setQuote(data);
}

//set new quote onload
const initialQuote = renderQuote();
console.log(initialQuote);
