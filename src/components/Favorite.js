import React, { useState } from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from '@reach/router';

import { StyledFavorite } from '../components/styles/StyledFavorite';


const Favorite = () => {
    let [favoriteList, setFavoriteList] = useState([]);

    favoriteList = JSON.parse(localStorage.getItem('favorite')) || [];
    const remove = (movie) => {
        const MovieFilter = favoriteList.filter((item) => item.id !== movie.id);

        window.location.reload(false)

        if (MovieFilter) {
            localStorage.setItem('favorite', JSON.stringify(MovieFilter));
            setFavoriteList(JSON.parse(localStorage.getItem('favorite') || '[]'));
        }
    };
    return (
        <StyledFavorite>
            <div className="favoritelist">
                {favoriteList.map((item) => (
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