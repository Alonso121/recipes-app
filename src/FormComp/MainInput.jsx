import React from 'react'

function MainInput({search,setSearch}) {
    return (
        <div className="form-control">          
          <label htmlFor="search-item">Item to search:</label>
          <input
            id="search-item"
            className="search-bar"
            placeholder="enter search item here"
            type="text"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          ></input>
        </div>
    )
}

export default MainInput
