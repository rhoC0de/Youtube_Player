import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './components/api_key';
import _ from 'lodash';


class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('DIY Tutorials');
  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      console.log(data);
      
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    const debounceSearch = _.debounce(searchTerm => this.videoSearch(searchTerm), 400);
    return (
      <div>
       <SearchBar onSearchTermChange={debounceSearch} />
       <VideoDetail video= {this.state.selectedVideo}/>
       <VideoList 
       onVideoSelect={userSelected => this.setState({selectVideo: userSelected})}
       videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
