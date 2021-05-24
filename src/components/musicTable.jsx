import React, { Component } from 'react';
import axios from 'axios';

class MusicTable extends Component {
    state = { 
        music: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/music/')
        .then(res =>{
            console.log(res.data)
            this.setState({music: res.data})
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>                    
                    <th>Release Date</th>
                    <th>Genre</th>
                </thead>
            <tbody>
            {this.state.music.map(song=> {
               return(
                   
                <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>                    
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                </tr>

                   )
                } )}
                </tbody>
                </table>

        
        )}
}
export default MusicTable