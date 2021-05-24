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

    handleFormChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    
    submitButton = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://127.0.0.1:8000/add_song/', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        const { title, artist, album, release_date, genre } = this.state;
        return (  
            <div>
                <form onSubmit={this.submitButton}>
                    <label>Song Title :
                    <input onChange={this.handleFormChange} type="text" name="title" value={title} />                    
                    </label>
                    <label>Artist :
                    <input onChange={this.handleFormChange} type="text" name="artist" value={artist} />
                    </label>
                    <label>Album :
                    <input onChange={this.handleFormChange} type="text" name="album" value={album} />
                    </label>
                    <label>Release Date :
                    <input onChange={this.handleFormChange} type="text" name="release_date" value={release_date} />
                    </label>
                    <label>Genre :
                    <input onChange={this.handleFormChange} type="text" name="genre" value={genre}  />
                    </label>                    
                    <button type="submit">Submit</button>
                </form> 
            </div>
        );
    }
}

export default SongForm