var quotes = 
[
{quote:"'I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'",author:"― Maya Angelou",}

,{quote:"'Live as if you were to die tomorrow. Learn as if you were to live forever.'",author:"― Mahatma Gandhi",}

,{quote:"'It is better to be hated for what you are than to be loved for what you are not.'",author:"― Andre Gide, AutumnLeaves",}

,{quote:"'So many books, so little time.'",author:"― Frank Zappa",}

,{quote:"'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
author:"― Albert Einstein",}
]


function newQuote(){
    var p = Math.trunc( Math.random() * quotes.length);
    document.getElementById("Quote").innerHTML = quotes[p].quote
    document.getElementById("Author").innerHTML = quotes[p].author
}

