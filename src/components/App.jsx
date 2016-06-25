class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: window.exampleVideoData[0]
    };
  }

  onVideoEntryClick(obj) {
    this.setState({
      videoId: obj.props.video

    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoId} />
        
        </div>
        <div className="col-md-5">
          <VideoList callBack={this.onVideoEntryClick.bind(this)} videos={window.exampleVideoData} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
