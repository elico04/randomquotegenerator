function generateQuote() {
    const quotes = [
        {
            quote: "Comparison is the thief of joy.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "The Universe is under no obligation to make sense to you.",
            author: "Neil Degrasse Tyson"
        },
        {
            quote: "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at.",
            author: "Stephen Hawking"
        },
        {
            quote: "Out of the mountain of despair, a stone of hope.",
            author: "Martin Luther King Jr."
        },
        {
            quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
            author: "Albert Einstein"
        }
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    // console.log(currentQuote);

    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;

}

window.onload = function() {
    generateQuote();
    // document.getElementById('generate').addEventListener('click', generateQuote);
}

generateQuote();