// main app
var Twit = require('twit');
var config = require('./config.js');

var timer; //init timer to hold interval
var Tweet = new Twit(config);
var quotes = config.quotes; //read quotes from file
var repeat = config.repeatInMinutes;
var status = null; // init quote to post
var lastQuote = ""; //last quote saved so that it can tell whether or not new quote is different
var errorCode;

function run() { // run is separate function because why not
    console.log("Running!");
    postTweet(); //posts an initial tweet as soon as it starts running
    clearInterval(timer);
    timer = setInterval(postTweet, (1000 * 60 * repeat)); //post tweet every x minutes
    return 0;

}

function postTweet() {
    status = null; // clear status
    while (status === null || status === lastQuote || errorCode === 187) { //make sure is different
        console.log("Needs to not be a dupe")
        status = quotes[Math.floor(Math.random() * quotes.length)];
    }
    Tweet.post('statuses/update', {
        status: status
    }, function (err, data, response) { //post tweet, log what status it was
        console.log("Tweet sent: " + status);
        errorCode = err.code;
        console.log("Error code: " +errorCode);
    })
   
    lastQuote = status; //store last quote
    return 0;
}
run() //run initially