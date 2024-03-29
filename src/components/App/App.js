import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
      { name: 'name2', artist: 'artist2', album: 'album2', id: 2 },
      { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }],
      playlistName: 'My Playlist',
      playlistTracks: [{ name: 'playlistName4', artist: 'playlistArtist4', album: 'playlistAlbum4', id: 4 },
      { name: 'playlistName5', artist: 'playlistArtist5', album: 'playlistAlbum5', id: 5 }]
    };
    this.addTracks = this.addTrack.bind(this);
  }

  addTrack(track) {
    const foundTrack = this.state.playlistTracks.find(
      (playlistTrack) => playlistTrack.id === track.id
      );
      const newTrack = this.state.playlistTracks.concat(track);
      foundTrack ? console.log("Track already exists") : this.setState({playlistTracks: newTrack});

    }
   

render() {

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
  )
}
}


export default App;
