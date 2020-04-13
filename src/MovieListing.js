import React from "react"

function MovieListing(props){

    let {poster, title, year } = props
    return (
        <tr className='movie-listing'>
            <td>
                <p><img alt={title} src={poster}/></p>
            </td>
            <td>
                <p>{title}</p>
            </td>
            <td>
                <p>{year}</p>
            </td>
        </tr>
    )
}

export default MovieListing