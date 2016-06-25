var searchYouTube = (options, callback) => {
  // TODO
  //console.log("options is", options);
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
      callback(data);
    }
  });

};

var obj = {};
obj.key = window.YOUTUBE_API_KEY; 
obj.query = 'dogs'; 
obj.max = 5; 
window.searchYouTube = searchYouTube;
