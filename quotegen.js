var quotes = [
    "Buy your yearbook NOW",
    "Buy your yearbook. Like, now.",
    "If you're a senior, don't forget to check out our <a style=\"color: lightyellow;\" href=\"todo.html\">Senior To-Do List</a>",
    "If you have any pictures to upload to the yearbook, go to <a style=\"color: lightyellow;\" href=\"hjeshare.com\">hjeshare.com</a>"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
window.onload = newQuote();