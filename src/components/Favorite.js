import React from 'react';
import PropTypes from 'prop-types';

import { StyledFavorite } from '../components/styles/StyledFavorite';


const Favorite = () => {
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
                        <StyledFavorite>
                            <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt={item.title} />
                            <div>
                                <button
                                    onClick={() => remove(item)}
                                > Remove from the Favorite
							</button>
                            </div>
                        </StyledFavorite>
                    </div>
                    <div >

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