// main app
var Twit = require('twit');
var config = require('./config.js');

var Tweet = new Twit(config);
var quotes = ["test1", "test2", "test3", "test4"];
var status = quotes[Math.floor(Math.random()*quotes.length)];

Tweet.post('statuses/update', {status: status}, function(err, data, response){
    console.log(data);
})