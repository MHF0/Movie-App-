import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from '@reach/router';

import { StyledFavorite } from '../components/styles/StyledFavorite';


const Favorite = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favorite'));
    const remove = (movie) => {
        const sliceMovie = favoriteList.find((item) => item.id === movie.id);
        if (sliceMovie) {
            const java = favoriteList.indexOf(sliceMovie);
            favoriteList.splice(java, 1);
            localStorage.setItem('favorite', JSON.stringify(favoriteList));
            window.location.reload(true);
        }
    };

    return (
        <StyledFavorite>
            <div className="favoritelist">
                {JSON.parse(localStorage.getItem('favorite')).map((item) => (
                    <div key={item.id}>
                        <div >

                            <div >
                                <Link to={`/${item.id}`}>

                                    <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt={item.title} />
                                </Link>
                                <div >
                                    <BottomNavigationAction onClick={() => remove(item)}
                                        icon={<DeleteForeverIcon style={{ fontSize: 50, color: 'black', width: "100%" }} />} />
                                </div>
                            </div>


                        </div>
                        <div >

                        </div>
                    </div>
                ))}
            </div>
        </StyledFavorite>
    );
};

export default Favorite;