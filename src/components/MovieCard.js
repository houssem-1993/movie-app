import React from 'react'
import StarRating from './StarRating'

export default function MovieCard(props) {
  
    return (
        <div className="Movie-cards">
            <div className="card">
             <span><StarRating rate={props.movie.rate}/></span>
              <div className="poster" style={{
                backgroundImage:
                    `url('${props.movie.image}')`
                }}></div>
            <div className="description">
            <h3 className="movie-name">Movie Name: {props.movie.name}</h3>
            <h5 className="movie-year"> Release date: {props.movie.year}</h5>
            </div>
            </div>
            
        </div>
    )
}
