import React from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  return (
    <div>
      <input type='search' placeholder='search robots' onChange={props.searchChange}/>
    </div>
  )
}
export default SearchBar;