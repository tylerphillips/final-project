function loadLyrics(data) {
    console.log(data)
  }


  var songs = [
    {
      spotifyURI: 'spotify:track:2dLLR6qlu5UJ5gk0dKz0h3',
      artistName: 'Lorde',
      songName: 'Royals'
    }, 
    {
      spotifyURI: 'spotify:track:2JFmTONwQdRaOj2s2DhFah',
      artistName: 'Ben Howard',
      songName: 'Keep Your Head Up'
    },
    {
      spotifyURI: 'spotify:artist:5BKsn7SCN2XmbF7apdCpRS',
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
      spotifyURI: 'spotify:track:60rHc4AkLlP4XVSATvBb6K',
      artistName: 'Halestorm',
      songName: 'I Miss The Misery'
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
      spotifyURI: "spotify:track:7qmCTTSYXiCMe7jboDOk6e",
      artistName: "The Beautiful South",
      songName: "Don't Fear The Reaper"
    },
  ]

  $.get('http://lyrics.wikia.com/api.php?artist='+ songs[0].artistName + '&song=Royals&fmt=realjson&callback=loadLyrics', function(data){
    
  })

// google.load('search', '1');

//       var imageSearch;

//       function addPaginationLinks() {
      
//         // To paginate search results, use the cursor function.
//         var cursor = imageSearch.cursor;
//         var curPage = cursor.currentPageIndex; // check what page the app is on
//         var pagesDiv = document.createElement('div');
//         for (var i = 0; i < cursor.pages.length; i++) {
//           var page = cursor.pages[i];
//           if (curPage == i) { 

//           // If we are on the current page, then don't make a link.
//             var label = document.createTextNode(' ' + page.label + ' ');
//             pagesDiv.appendChild(label);
//           } else {

//             // Create links to other pages using gotoPage() on the searcher.
//             var link = document.createElement('a');
//             link.href="/image-search/v1/javascript:imageSearch.gotoPage("+i+');';
//             link.innerHTML = page.label;
//             link.style.marginRight = '2px';
//             pagesDiv.appendChild(link);
//           }
//         }

//         var contentDiv = document.getElementById('content');
//         contentDiv.appendChild(pagesDiv);
//       }

//       function searchComplete() {

//         // Check that we got results
//         if (imageSearch.results && imageSearch.results.length > 0) {
		
//           // Grab our content div, clear it.
//           var contentDiv = document.getElementById('content');
//           contentDiv.innerHTML = '';

//           // Loop through our results, printing them to the page.
//           var results = imageSearch.results;
//           for (var i = 0; i < results.length; i++) {
//             // For each result write it's title and image to the screen
//             var result = results[i];
//             var imgContainer = document.createElement('div');
//             var title = document.createElement('div');
            
//             // We use titleNoFormatting so that no HTML tags are left in the 
//             // title
//             title.innerHTML = result.titleNoFormatting;
//             var newImg = document.createElement('img');

//             // There is also a result.url property which has the escaped version
//             newImg.src="/image-search/v1/result.tbUrl;"
//             imgContainer.appendChild(title);
//             imgContainer.appendChild(newImg);

//             // Put our title + image in the content
//             contentDiv.appendChild(imgContainer);
//           }

//           // Now add links to additional pages of search results.
//           addPaginationLinks(imageSearch);
//         }
//       }

//       function OnLoad() {
      
//         // Create an Image Search instance.
//         imageSearch = new google.search.ImageSearch();

//         // Set searchComplete as the callback function when a search is 
//         // complete.  The imageSearch object will have results in it.
//         imageSearch.setSearchCompleteCallback(this, searchComplete, null);

//         // Find me a beautiful car.
//         imageSearch.execute("Subaru STI");
        
//         // Include the required Google branding
//         google.search.Search.getBranding('branding');
//       }
//       google.setOnLoadCallback(OnLoad);

