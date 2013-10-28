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
  	  // Set searchComplete as the callback function when a search is 
  	  // complete.  The imageSearch object will have results in it.
  	  imageSearch.setSearchCompleteCallback(this, searchComplete, null);

  	  // find the lyrics
  	  imageSearch.execute(data.lyrics);
  	  
  	  // Include the required Google branding
  	  google.search.Search.getBranding('branding');
  	});

  	currentSong ++;

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

  


$.get("https://embed.spotify.com/?uri=" + songs[0].spotifyURI)

google.load('search', '1');

function searchComplete() {
	$('#content').html('')
	// Check that we got results
	if (imageSearch.results && imageSearch.results.length > 0) {

	  // Loop through our results, printing them to the page.
	  var results = imageSearch.results;
	  for (var i = 0; i < results.length; i++) {
	    // For each result write it's title and image to the screen
	    var result = results[i]
	    var image = $('<img src="'+ result.tbUrl + '">')
      // $(image.appendTo('li'))
      $('#content').append(image)
      // console.log(image)
      
      
	  }
    $("#content").slidesjs()
	}
}

$(function(){
  var slideShowContainer = $('.slideShow'),
      slideShowItem = '.slides li',
      transitionTime = 1000,
      pauseTime = 3000,
      curSlide = 0,
      int = setInterval(function(){
      if(curSlide === parseInt($(slideShowItem).length - 1)){
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      slideShowContainer.animate({ scrollLeft: $(slideShowItem).width() * curSlide }, transitionTime);
  }, pauseTime);

})


