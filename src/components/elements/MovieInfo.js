import React from 'react';
import PropTypes from 'prop-types';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { confirmAlert } from 'react-confirm-alert';
import '../styles/react-confirm-alert.css';

import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import MovieThumb from './MovieThumb';
import { StyledMovieInfo } from '../styles/StyledMovieInfo';

const favoriteiteam = JSON.parse(localStorage.getItem('favorite') || '[]');

function MovieInfo({ movie }) {

  const favoriteAdd = (movie) => {
    const dofoveriteAdd = favoriteiteam.find((item) => {
      return item.id === movie.id;
    });
    if (!dofoveriteAdd) {

      confirmAlert({
        title: 'Add to Favorite',
        message: 'Are you sure you want to add this movie ?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              favoriteiteam.push(movie);
              localStorage.setItem('favorite', JSON.stringify(favoriteiteam));
            }
          },
          {
            label: 'No',
            onClick: () => ('Click No')
          }
        ]
      })
    } else {
      confirmAlert({ title: 'You Have The Movie In Your Favorite',
      buttons:[{label: 'Confirm'}]
     })
    }
  };

  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
            alt="moviethumb"
          />
        </div>
        <div className="movieinfo-text">
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-director">
            <div>
              <h3>IMDB RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map(element => (
                <p key={element.credit_id}>{element.name}</p>
              ))}

            </div>
            <BottomNavigationAction
              icon={<FavoriteBorderIcon onClick={() => favoriteAdd(movie)}
                style={{ fontSize: 50, color: 'white' }} />} />

          </div>
        </div>
      </div>
    </StyledMovieInfo>
  )
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
}

export default MovieInfo;
