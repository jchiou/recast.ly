class App extends React.Component {
  constructor(props) {
    super(props);
    // state of app includes current video playing as well as videos playlist
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: []
    };
   
  }

  // callback function for changing current video to video being clicked - this will be passed on to videoList, then to videoEntryList component
  // videoEntryList will send back the video object being clicked
  onVideoEntryClick(obj) {
    this.setState({
      currentVideo: obj.props.video
    });
  }

  // callback function for initializing playlist as well as callback for our searchYouTube helper function - this changes the videos playlist based off of search query
  updateVideos(data) {
    this.setState({
      videos: data
    });
  }

  // wrapper function for debouncing searchYouTube API request. Also grabs the value of the search form and sets it as the query
  searchVideo() {
    obj.query = document.getElementById('form').value;
    _.debounce(function() { searchYouTube(obj, this.updateVideos.bind(this)); }.bind(this), 500)();
  }

  // similar to document.ready in jquery, this is used for initializing videos playlist
  componentDidMount() {
    searchYouTube(obj, this.updateVideos.bind(this)); 
  }

  // creating DOM elements
  render() {
    return (
      <div>
        {/* Pass in searchVideo as a property to Nav so Nav can pass it on to Search. Need to bind this to App so this.searchVideo refers to App's method rather than Nav's method */}
        <Nav searchYouTube={this.searchVideo.bind(this)}/ >
        <div className="col-md-7">
          {/* Pass in current video as a property to VideoPlayer so it can play the right video accordingly */}
          <VideoPlayer video={this.state.currentVideo} />
          
        
        </div>
        <div className="col-md-5">
          {/* Pass in callback to VideoList so it can pass it on to VideoEntryList for clicked videos (see onVideoEntryClick above for more info)
          Also passing in videos playlist as a property to VideoList so it can render the playlist */}
          <VideoList callBack={this.onVideoEntryClick.bind(this)} videos={this.state.videos} />
          }
        </div>
      </div>
    );
  }
}

//searchYouTube(obj);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
