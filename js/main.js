var Quotes = [
    {
        quote: "It's not what happens to you, but how you react to it that matters",
        author: "--Epictetus",
    },
    {
        quote: "The best revenge is massive success.",
        author: "--Frank Sinatra",
    },
    {
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "--Nelson Mandela",
    },
    {
        quote: "Do not take life too seriously. You will not get out alive.",
        author: "--Elbert Hubbard",
    },
];

document.getElementById('get').addEventListener('click', () => {
    var randomIndex = Math.floor(Math.random() * Quotes.length);
    var randomQuote = Quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote.quote;
    document.getElementById('author').textContent = randomQuote.author;
});




