import React from 'react'

const SearchBar = props => {
  return (
    <div>
      <input type="text" onChange={props.onChange} onSubmit={props.onSubmit}></input>
    </div>
  )
}

export default SearchBar;