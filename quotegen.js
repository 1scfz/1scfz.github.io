var quotes = [
    "Make it work, make it right, make it fast",
    "99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code...",
    "Remember that there is no code faster than no code.",
    "Deleted code is debugged code.",
    "If you write your code as cleverly as possible, then you, by definition, are not smart enough to debug it.",
    "It's not a bug, it's an undocumented feature!"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
window.onload = newQuote();