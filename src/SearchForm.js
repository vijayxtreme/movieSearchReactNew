import React from "react"

function SearchForm(props){
    let {handleChange} = props
    return (
        <div className="search-form">
            <form>
                <input type='text' placeholder='Search movies' onChange={e => handleChange(e)}/>
            </form>
        </div>
    )
}

export default SearchForm