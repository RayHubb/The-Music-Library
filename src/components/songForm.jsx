import React from 'react'

function SongForm() {
    return (
        <div>
            <form>
                <label>Song Title :
                <input type="text" name="songTitle" />
                </label>
                <label>Album :
                <input type="text" name="album" />
                </label>
                <label>Artist :
                <input type="text" name="artist" />
                </label>
                <label>Genre :
                <input type="text" name="genre" />
                </label>
                <label>Release Date :
                <input type="date" name="releaseDate" />
                </label>
                <button type="submit" value="Submit" />
            </form> 
        </div>
    );
}

export default SongForm