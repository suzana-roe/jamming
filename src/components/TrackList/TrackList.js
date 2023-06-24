import React from 'react';

import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map((song) => {
                        return <Track 
                        track={song} 
                        key={song.id}
                        onAdd={this.state.onAdd}/>
                    })
                }
            </div>
        )
    }
}

export default TrackList;