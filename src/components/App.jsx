class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: window.exampleVideoData[0],
      videos: []
    };
    console.log(obj);
   
      // obj.query = document.getElementById('form').value;
      //searchYouTube(obj, this.initialVideo.bind(this));
    

  }

  onVideoEntryClick(obj) {
    this.setState({
      videoId: obj.props.video
    });

  }

  initialVideo(data) {
    this.setState({
      videos: data.items
    });
  }

  // getSearch() {
  //   return document.getElementById('form').value;
  // }
  searchVideo(){
    obj.query = document.getElementById('form').value;
    searchYouTube(obj, this.initialVideo.bind(this));
  }

  componentDidMount() {
    searchYouTube(obj, this.initialVideo.bind(this)); 
  }

  render() {
    return (
      <div>
        <Nav searchYouTube={this.searchVideo.bind(this)}/ >
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoId} />
        
        </div>
        <div className="col-md-5">
          <VideoList callBack={this.onVideoEntryClick.bind(this)} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

searchYouTube(obj);
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
