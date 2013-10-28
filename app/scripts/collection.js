SpotifySong = Backbone.Model.extend({
  intialize: function(){
    console.log("new player created")
  }
})

SpotifySongsCollection = Backbone.Collection.extend({
  intialize: function(){
    console.log("new collection created")
  }
})

var songs = [
    {
      spotifyURI: 'spotify:track:2JFmTONwQdRaOj2s2DhFah',
      artistName: 'Ben Howard',
      songName: 'Keep Your Head Up',
    }, 
    {
      spotifyURI: 'spotify:track:2dLLR6qlu5UJ5gk0dKz0h3',
      artistName: 'Lorde',
      songName: 'Royals',
      lyricLink: 'http://lyrics.wikia.com/api.php?artist=lorde&song=royals'
    }, 
    {
      spotifyURI: 'spotify:track:2QepprWju53OwtTHrpnLo9',
      artistName: 'Goldfrapp',
      songName: 'Happiness'
    }, 
    {
      spotifyURI: 'spotify:track:3G9ETaH55bMQx8hwNhAgbU',
      artistName: 'Gregory Alan Isakov',
      songName: 'The Stable Song'
    },
    {
      spotifyURI: 'spotify:track:4xjC014uAzL5O8xD1Tp6NC',
      artistName: 'Hudson Taylor',
      songName: 'Battles'
    },
    {
      spotifyURI: 'spotify:track:5PUvinSo4MNqW7vmomGRS7',
      artistName: 'Robin Thicke',
      songName: 'Blurred Lines'
    },
    {
      spotifyURI: 'spotify:track:3Kj2EWpIBnvETsYq4cq0IH',
      artistName: 'Gregory Alan Isakov',
      songName: 'Big Black Car'
    },
    {
      spotifyURI: 'spotify:track:0kzfqqvipRSBQchrB3xX8D',
      artistName: 'Dawes',
      songName: 'When My Time Comes'
    },
    {
      spotifyURI: "spotify:track:3bbdnFcNSHPaYrOzx7dJeE",
      artistName: "Pheonix",
      songName: "Lisztomania"
    },
    {
      spotifyURI: "spotify:track:4o0NjemqhmsYLIMwlcosvW",
      artistName: "Band Of Horses",
      songName: "The Funeral"
    },
	{
      spotifyURI: "spotify:track:0MOzmbwL6Aad4jIOJomWVm",
      artistName: "Bon Iver",
      songName: "Towers"
    },

  ]