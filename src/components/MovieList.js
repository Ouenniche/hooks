import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movie , searchtitle}){
  return (
    <div className='row justify-content-center'>
      {movie.filter(movie=>movie.title.toUpperCase().includes(searchtitle.toUpperCase().trim())).map((movie)=>
      <MovieCard movie={movie} key={movie.id}/>)}
    </div>
  )
}


export default MovieList
