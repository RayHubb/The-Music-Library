import React, { Component } from 'react';
import SearchBar from './searchBar';
import SongForm from './songForm';

class App extends Component {
    state = { }
    render() {
        return (
            <div>
                <span>
                    <SearchBar />
                </span>
                <span>
                    <SongForm />
                </span>
            </div>
        );
    }
}

export default App;
