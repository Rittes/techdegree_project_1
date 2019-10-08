/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  An array of objects with quotes and information about the quote.
***/
let quotes = [{
        quote: "Wisely, and slow. They stumble that run fast.",
        source: "William Shakespeare",
        citation: "Romeo and Juliet",
        year: 1595,
        category: "Literature"
    },
    {
        quote: "Never say never. Because limits, like fears, are often just an illusion.",
        source: "Michael Jordan",
        citation: "Hall of Fame induction address",
        year: 2009,
        category: "Sports"
    },
    {
        quote: "No matter where you’re from, your dreams are valid.",
        source: "Lupita Nyong'o",
        citation: "Oscar acceptance speech",
        year: 2014,
        category: "Entertrainment"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        source: "Eleanor Roosevelt",
        citation: '',
        year: 1978,
        category: "Politics"
    },
    {
        quote: "Believe you can and you're halfway there.",
        source: "Theodore Roosevelt",
        citation: '',
        year: '',
        category: "Politics"
    }
];



/***
  This function generates a random number and uses the number to log the quotes from the 
  array of objects.
***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    return randomQuote;
}

/***
  This function uses the quote generator getRandomQuote() to assemble the correct information into
  a string that is then printed on the page.
***/
function printQuote() {
    let getQuote = getRandomQuote();
    let randomQuoteHTML = '';
    randomQuoteHTML += '<p class="quote">' + getQuote.quote + '</p>';
    randomQuoteHTML += '<p class="source">' + getQuote.source;
    if (getQuote.citation !== '') {
        randomQuoteHTML += '<span class="citation">' + getQuote.citation + '</span>';
    }
    if (getQuote.year !== '') {
        randomQuoteHTML += '<span class="year">' + getQuote.year + '</span>';
    }
    if (getQuote.category !== '') {
        randomQuoteHTML += '<span class="category">' + getQuote.category + '</span>';
    }
    randomQuoteHTML += '</p>';
    document.body.style.backgroundColor = randomColor(); // found this online in order to target the background color on the page.
    return document.getElementById("quote-box").innerHTML = randomQuoteHTML;
}
/***
  function generates a random number between 0 and 255.
***/
function randomRGB() {
    return Math.floor(Math.random() * 256);
}
/***
  function uses the generated numbers from randomRGB() and uses 3 values to generate a rgb().
***/
function randomColor() {
    let color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color
}

/***
 Set timer to 15 seconds per quote 
 ***/
setInterval(printQuote, 15000)



/***
  calls printQuote() after every the button is clicked.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);