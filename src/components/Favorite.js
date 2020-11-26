import React from 'react';
import PropTypes from 'prop-types';

import { StyledMovieThumb } from './styles/StyledMovieThumb';

const Favorite = ({image}) => {
    const favoriteList = JSON.parse(localStorage.getItem('favorite'));
    const remove = (movie) => {
        const sliceMovie = favoriteList.find((item) => item.id === movie.id);
        if (sliceMovie) {
            const java = favoriteList.indexOf(sliceMovie);
            favoriteList.splice(java, 1);
            localStorage.setItem('favorite', JSON.stringify(favoriteList));
        }
    };

    return (
        <div>
            {JSON.parse(localStorage.getItem('favorite')).map((item) => (
                <div key={item.id}>
                    <div >
                        <StyledMovieThumb>
                            <img  src={`https://image.tmdb.org/t/p/${item.image}`} alt={item.title} />
                            
                        </StyledMovieThumb>
                    </div>
                    <div >
                        <div>
                            <button
                                onClick={() => remove(item)}
                            > Remove from the Favorite
							</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        
    );
};
Favorite.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
}

export default Favorite;