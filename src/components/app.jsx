import React, { Component } from 'react';
import SearchBar from './searchBar';
import SongForm from './songForm';
import MusicTable from './musicTable';

class App extends Component {

    state = { }
    render() {
        return (
            <div>
                <span>
                    <MusicTable />
                </span>
            </div>
        );
    }
}

export default App;
