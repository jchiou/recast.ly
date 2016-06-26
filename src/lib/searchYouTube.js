var searchYouTube = (options, callback) => {
  // https://developers.google.com/youtube/v3/docs/search/list#try-it
  var obj = { part: 'snippet', 
              maxResults: options.max, 
              q: options.query, 
              key: options.key, 
              videoEmbeddable: 'true', 
              type: 'video'};
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: obj,
    success: function (data) {
      callback(data.items);
    }
  });

};

var obj = {};
obj.key = window.YOUTUBE_API_KEY; 
obj.query = 'dogs'; 
obj.max = 5; 
window.searchYouTube = searchYouTube;
