import React, { useContext } from 'react';
import { GlobalContext } from '../components/context/GlobalState';
import  MovieInfo  from './elements/MovieInfo';

 const Favorite = () => {
    const { favorite } = useContext(GlobalContext);
  
    return (
      <div className="movie-page">
        <div className="container">
          <div className="header">
              
            <span className="count-pill">
              {favorite.length} {favorite.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>
  
          {favorite.length > 0 ? (
            <div className="movie-grid">
              {favorite.map((movie) => (
                <MovieInfo movie={movie} key={movie.id} type="favorite" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list! Add some!</h2>
          )}
        </div>
      </div>
    );
  };
  export default Favorite;
  