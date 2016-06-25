var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + options.max + '&q=' + options.query + '&key=' + options.key,
    type: 'GET',
    success: function (data) {
      console.log(data.items)
      // callback(data.items);
    }
  });
};

var obj = {};
obj.key = window.YOUTUBE_API_KEY; 
obj.query = 'cats'; 
obj.max = 10; 
searchYouTube(obj);

window.searchYouTube = searchYouTube;
