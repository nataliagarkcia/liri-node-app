//code that will grab the data keys//

//store the keys in a variable//

//this variable will load the fs package that will allow to write and read
var fs = require('fs');

 
// this will be the first action inside each case ('my-tweets','spotify-this-song', 'movie-this','do-what-it-says')
var action = process.argv[2];

// The second will be the information that you would like to ask liri
var value = process.argv[3];


//This switch case statment will call the functions depending in the users input
function switchFunc() {

    switch(action){
        case 'my-tweets':
            mytweets();
        break;

        case 'spotify-this-song':
            spotifythissong();
        break;

        case 'movie-this':
            moviethis();
        break;

        case 'do-what-it-says':
            dowhatitsays();
        break;
    }
}

//this will hold the movie function
function moviethis() {
 
//npm package     
var request = require('request');

//this variable will allow the user to search for the movie that they input
var movieName = value;

//this if statement will indicate that if is there an input for the movie, it should to use it
if (movieName = value)  {
// Then run a request to the OMDB API with the movie specified 
var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=full&tomatoes=tru&r=json';
}

//else, it should to return Mr.Nobody by default
else {queryUrl = 'http://www.omdbapi.com/?t=' + 'Mr.Nobody' +'&y=&plot=full&tomatoes=true&r=json';

    console.log("\n")
    console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/")}
    console.log("\nIt's on Netflix!");

// Then create a request to the queryUrl, and return the desired data    
    request(queryUrl , function (error, response, data) {

if (!error &&response.statusCode == 200) {


    //This will console log all the required information for the movie    
    console.log("\nTitle of the movie: " + JSON.parse(data)['Title'] + "\n" +
                "\nThe Release Year for the movie is: " + JSON.parse(data)['Year'] + "\n" +
                "\nIMDB Rating of the movie: " + JSON.parse(data)['imdbRating'] + "\n" +
                "\nCountry were the movie was produced: " + JSON.parse(data)['Country'] + "\n" +
                "\nLanguage: " + JSON.parse(data)['Language'] + "\n" +
                "\nPlot of the movie: " + JSON.parse(data)['Plot'] + "\n" +
                "\nActors in the movie: " + JSON.parse(data)['Actors'] + "\n" +
                "\nRotten Tomatoes Rating: " + JSON.parse(data)['tomatoRating'] + "\n" +
                "\nRotten Tomatoes URL: " + JSON.parse(data)['tomatoURL']);

  } 
})};

//this holds the spotify-this-song function
function spotifythissong() {

//npm package require to run spotify 
var spotify = require('spotify');

//this variable iquals the value input from the user with the song to search
var song = value;
 
//this is part of the npm spotify, and will call the track and query to received the data 
spotify.search({ type: 'track', query: song }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
return;
    }
        
      // console logs the data correspondent to the artist input by the user
      console.log("Artist: " + data.tracks.items[0].artists[0].name +
                  "\nThis songs name: " + data.tracks.items[0].name + 
                  "\nA preview link of the song from Spotify: " + data.tracks.items[0].album.external_urls.spotify +
                  "\nAlbums name: " + data.tracks.items[0].album.name);


        });

}
//this functions will hold the twitter actions
function mytweets(){
    var Twitter = require('twitter');
    //this variable will call the keys that are store in a local folder
    var keys = require('./keys.js')

    //this will add the keys
    var clients = new Twitter(keys.twitterKeys)
 
    var params = {screen_name: 'nataliagarkcia'};
        clients.get('statuses/user_timeline', params, function(error, tweets, response) {
             if (!error) {

            //this variable will be use to call the tweets    
            var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

            //with this foor loops it will go thru the numbers array and console.log the las 20 tweets and date of those
            for (i = 0; i < numbers.length; i++) { 
                

                //this will console.log the last 20 tweets and its dates
                console.log("\n");
                console.log("\ntweets: " + tweets[i].text);
                console.log("\nWhen this was created: " + tweets[i].created_at);
                console.log("\n-------------\n");
            }
        }
    });


};

function dowhatitsays(){

    var fs = require('fs');


   fs.readFile("random.txt", "utf8", function(error, data) {

    // We will then print the contents of data
    
    var dataArr = data.split(',');
    action = dataArr[0];
    value = dataArr[1];

    switchFunc()


    // Then split it by commas (to make it more readable)
   
    

    // We will then re-display the content with the split for aesthetics.

    })
};


switchFunc();