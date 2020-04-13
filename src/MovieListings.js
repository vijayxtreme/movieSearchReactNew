import React from "react"
import MovieListing from "./MovieListing"

function MovieListings(props){
    
    let { movies } = props
    if (movies.length > 0){
        let output = movies.map((movie, idx) => {
            if(movie === undefined){
                return ''
            }
            return (
                <MovieListing key={idx} poster={movie.Poster} title={movie.Title} year={movie.Year} />
            )
        })
        return (
            <table className="movies">
                <thead>
                    <tr>
                        <th>Poster</th>
                        <th>Title</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>
        )
    }else {
        return (
            <div className="no-movies">No movies, why don't you search for something?</div>
        )
    }
}

export default MovieListings;