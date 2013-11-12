function loadLyrics(data) {
    console.log(data)
  }

  var currentSong = 0

  $('.next-song').click(function(){
  	var newUrl = 'https://embed.spotify.com/?uri=' + songs[currentSong].spotifyURI;
  	
  	$('#player').attr('src', newUrl)
  	
  	$.getJSON("http://lyrics.wikia.com/api.php?callback=?",
  	
  	{
  	   func: 'getSong',
  	   artist: songs[currentSong].artistName,
  	   song: songs[currentSong].songName,
  	   fmt: 'realjson' 
  	},


  	function(data){
  	  $('#lyrics').text(data.lyrics);

  	  window.imageSearch = new google.search.ImageSearch();

      // Puts restriction on the the size of the image returned
      
      imageSearch.setRestriction(google.search.ImageSearch.RESTRICT_IMAGESIZE,
                             google.search.ImageSearch.IMAGESIZE_LARGE);


      
      // Set searchComplete as the callback function when a search is 
      // complete.  The imageSearch object will have results in it.

      imageSearch.setSearchCompleteCallback(this, searchComplete, null);

      // Find the lyrics
      imageSearch.execute(data.lyrics);
      
      // Include the required Google branding
      google.search.Search.getBranding('branding');


    });

    currentSong ++;

  })

  var songs = [
    {
      spotifyURI: 'spotify:track:3Kj2EWpIBnvETsYq4cq0IH',
      artistName: 'Gregory Alan Isakov',
      songName: 'Big Black Car'
    },
    {
      spotifyURI: 'spotify:track:4h8VwCb1MTGoLKueQ1WgbD',
      artistName: 'Avicii',
      songName: 'Wake Me Up'
    },
    {
      spotifyURI: 'spotify:track:2JFmTONwQdRaOj2s2DhFah',
      artistName: 'Ben Howard',
      songName: 'Keep Your Head Up'
    }, 
    {
      spotifyURI: "spotify:track:3bbdnFcNSHPaYrOzx7dJeE",
      artistName: "Pheonix",
      songName: "Lisztomania"
    },
    {
      spotifyURI: 'spotify:track:2QepprWju53OwtTHrpnLo9',
      artistName: 'Goldfrapp',
      songName: 'Happiness'
    }, 
    {
      spotifyURI: 'spotify:track:4xjC014uAzL5O8xD1Tp6NC',
      artistName: 'Hudson Taylor',
      songName: 'Battles'
    },
    {
      spotifyURI: "spotify:track:4o0NjemqhmsYLIMwlcosvW",
      artistName: "Band Of Horses",
      songName: "The Funeral"
    },
    {
      spotifyURI: 'spotify:track:0kzfqqvipRSBQchrB3xX8D',
      artistName: 'Dawes',
      songName: 'When My Time Comes'
    },
    {
      spotifyURI: 'spotify:track:2dLLR6qlu5UJ5gk0dKz0h3',
      artistName: 'Lorde',
      songName: 'Royals'
    }, 
    {
      spotifyURI: 'spotify:track:5PUvinSo4MNqW7vmomGRS7',
      artistName: 'Robin Thicke',
      songName: 'Blurred Lines'
    },
    {
      spotifyURI: "spotify:track:0MOzmbwL6Aad4jIOJomWVm",
      artistName: "Bon Iver",
      songName: "Towers"
    },
    {
      spotifyURI: 'spotify:track:3G9ETaH55bMQx8hwNhAgbU',
      artistName: 'Gregory Alan Isakov',
      songName: 'The Stable Song'
    },
    {
      spotifyURI: 'spotify:track:4KXzKRp4amS8unfZaxCGS9',
      artistName: 'Delta Rae',
      songName: 'Morning Comes'
    },
    {
      spotifyURI: 'spotify:track:7s0lDK7y3XLmI7tcsRAbW0',
      artistName: 'Fall Out Boy',
      songName: 'My Songs Know What You Did In The Dark (Light Em Up)'
    },

  ]

$.get("https://embed.spotify.com/?uri=" + songs[0].spotifyURI)

google.load('search', '1');

// searchComplete called in click event
function searchComplete() {
	$('#content').html('')
	// Check that we got results
	if (imageSearch.results && imageSearch.results.length > 0) {
    
	  // Loop through our results, printing them to the page.
	  var results = imageSearch.results;
    var counter = 0     

    // If slideshow exists, clear the previous slides.
    if (window.slideshow) {
      clearInterval(window.slideshow);
    }

    // Slideshow
    window.slideshow = setInterval(function(){
      console.log('changing slides!')
       $('#custom').css('background-image', 'url(' + results[counter].url + ')')
       counter += 1
       if (counter > 3){counter = 0}
      }, 5000)
    }; 
}




