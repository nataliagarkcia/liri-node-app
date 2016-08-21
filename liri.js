//code that will grab the data keys//

//store the keys in a variable//



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



function moviethis() {
    var request =  require('request');

var url = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json'

request(url, function (error, response, ))
}

