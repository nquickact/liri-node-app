var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var client = new Twitter({
    consumer_key: 'dEZ6LE848ICiXw0JSaQBaVprd',
    consumer_secret: 'SSL4CtI1ZKfymjy2kUU0BH6MwEParEu9Vr4w3DJq6lXDsRHk8o',
    access_token_key: '900043867478564864-3ryLqVjc6yZouWMdN9Hn8NFtYd8ooyd',
    access_token_secret: 'vaHYnQlupPLve0xIR2S40kovTYdJYpAmEjhVtxfVO6ipr',
});

var params = { screen_name: 'CoderQuick' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});


request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage. 
});



var spotify = new Spotify({
    id: 3340159d8a9b479bbe84034533315acc,
    secret: 274e1e89618d4d5ca040b955dd7bc982
            });

spotify.search({type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});