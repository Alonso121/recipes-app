import React from 'react'

function MainInput({search,setSearch}) {
    return (
        <div className="form-input">
          <button className="search-button" type="submit">
            search
          </button>
          <input
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
