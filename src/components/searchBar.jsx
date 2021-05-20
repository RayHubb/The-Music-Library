import React from 'react'


    function SearchBar() {
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


export default SearchBar