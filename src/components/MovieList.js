import React from 'react'
import MovieCard from'./MovieCard'
import AddMovie from './AddMovie'

 function MovieList(props) {
    return (
        <div className="movie-list">
            {props.movieList.map(el=> <MovieCard movie={el} key={el.id} />)}
            <AddMovie addMovie={props.addMovie} />
        </div>
    )
}
export default MovieList