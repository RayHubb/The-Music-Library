import React, { Component } from 'react';
import asios from 'axios';

class SearchBar extends Component {
    render () {
        return (
            <div>
                <form>
                    <label>Search:
                    <input type="text" name="searchBar" />
                    </label>
                    <button type="search" value="Search" />
                </form>            
            </div>
        );
    }
}

export default SearchBar