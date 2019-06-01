# FriendFinder

## Description
A full-stack dating app that will take in results from users surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Dependencies and APIs

  * [Express](https://www.npmjs.com/package/express)

  * [Path](https://www.npmjs.com/package/path)



## What Each Command Should Do

1. `node liri.js concert-this <artist>`

   * This will search the Bands in Town Artist Events API for an artist and render:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

![concert-this](assets/images/concert-this.png)
Format: ![Alt Text](url)

2. `node liri.js spotify-this-song '<song>'`

   * This will show the following information about the song:

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

![spotify-this](assets/images/spotify-this.png)
Format: ![Alt Text](url)

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

     * It's on Netflix!

![movie-this](assets/images/movie-this.png)
Format: ![Alt Text](url)

4. `node liri.js do-what-it-says`

   * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

![do-this](assets/images/do-this.png)
Format: ![Alt Text](url)
