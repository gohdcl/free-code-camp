function main() {

  // display a random quote on button push
  $("#get").on("click", function(){
    $("#quote-text").text(getQuote());
  });

  // tweet the displayed post on a different button push
  $("#tweet").on("click", function(){
    if($("#quote-text").text() !== "") { // if the quote isn't blank
      // set the url equal to twitter's tweet url and set ?text= to the quote
      var url = "https://twitter.com/intent/tweet?text=" + $("#quote-text").text();
      // open a new window/tab (depending on browser settings) to the posting page
      window.open(url, "_blank");
    } else {
      // else there is no quote up, and alert user to get a quote first
      alert("There is no quote to tweet! Press \"Get a Quote\" first!");
    }
  });
}

function getQuote() {
  // construct an array of quotes
  var quotes = ["It is not death that man should fear, but he should fear never beginning to live. -Marcus Aurelius",
  "If you wish to make an apple pie from scratch, you must first invent the universe. -Carl Sagan",
  "If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission. -Rear Admiral Grace Hopper, USN, Ph.D",
  ];

  // return a random quote
  return quotes[Math.floor(Math.random() * quotes.length)];
}

$(document).ready(main);
