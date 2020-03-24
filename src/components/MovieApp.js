import React, { Component } from 'react'
import SearchMovie from './SearchMovie'
import MovieList from './MovieList'

 class MovieApp extends Component {
     state ={
         search:"",
         rating:1 ,
         movieList:[{name:"flash",year:"2004",image:"https://img.moviepostershop.com/flash-tv-movie-poster-2014-1020773055.jpg",rate:"5",id:"flash"},
         {name:"LORD OF CHAOS",year:"2019",image:"https://images-na.ssl-images-amazon.com/images/I/714JqiyQoeL._AC_SL1475_.jpg",rate:"4",id:"lord of chaos"},
        {name:"MetalHead",year:"2013",image:"https://images-na.ssl-images-amazon.com/images/I/913C3Sl1EjL._RI_.jpg",rate:"5",id:"metalhead"},
        {name:"Flight 666",year:"2009",image:"https://img.moviepostershop.com/iron-maiden-flight-666-movie-poster-2009-1020490308.jpg",rate:"4",id:"flight666"}]
     }
        
     hundleSearch = (val) => this.setState({search:val})

     handleRating = rate => this.setState({ rating: rate })

     addMovie = newMovie => this.setState({
      movieList: [...this.state.movieList, newMovie]
    });

    render() {
        return (
            <div>
                <SearchMovie hundleSearch={this.hundleSearch} rate={this.state.rating} handleRating={this.handleRating}/>
                <MovieList movieList={this.state.movieList.filter(el => el.rate>=this.state.rating && el.name.toLowerCase().includes(this.state.search.toLowerCase().trim()))} 
                addMovie={this.addMovie}/>
            </div>
        )
    }
}
export default MovieApp