var quotes = [
    "Hey, I\'m StudioWack",
    "StudioWack, Nick here",
    "Don\'t hack me please",
    "This is the github repository: <a href=\"https://github.com/1scfz/1scfz.github.io/\">GitHub</a>",
    "I don't use Wix or any drag and drop website builders!"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
window.onload = newQuote();