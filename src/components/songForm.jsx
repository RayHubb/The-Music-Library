import React, { Component } from 'react';
import axios from 'axios'; 

class SongForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
             title: '',
             artist: '',
             album: '',
             release_date: '',
             genre: ''
        }
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:8000/music/')
        .then(res =>{
            console.log(res.data)
            this.setState({state: res.data })
        });
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value,
            artist: event.target.value,
            album: event.target.value,
            release_date: event.target.release_date,
            genre: event.target.value
        })
    }

    render() {
        return (  
            <div>
                <form>
                    <label>Song Title :
                    <input type="text" name="songTitle" 
                    value={this.state.title} />
                    onChange={this.handleFormChange}
                    </label>
                    <label>Artist :
                    <input type="text" name="artist" 
                    value={this.state.artist} />
                    onchange
                    </label>
                    <label>Album :
                    <input type="text" name="album" 
                    value={this.state.album} />
                    </label>
                    <label>Release Date :
                    <input type="date" name="releaseDate" 
                    value={this.state.release_date} />
                    </label>
                    <label>Genre :
                    <input type="text" name="genre" 
                    value={this.state.genre}  />
                    </label>                    
                    <button type="submit" value="Submit" />
                </form> 
            </div>
        );
    }
}

export default SongForm