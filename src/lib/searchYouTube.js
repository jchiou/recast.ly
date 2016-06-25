var searchYouTube = (options, callback) => {
  // TODO
  console.log('this call back is for test only', callback);
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
      // this is for test
      callback(data.items);
    }
  });
};

var obj = {};
obj.key = window.YOUTUBE_API_KEY; 
obj.query = 'cats'; 
obj.max = 5; 
// searchYouTube(obj);

window.searchYouTube = searchYouTube;
