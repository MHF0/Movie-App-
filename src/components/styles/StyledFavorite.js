import styled from 'styled-components';

export const StyledFavorite = styled.div`
  img {
    
    /* min-height: 340px; */
    transition: all 0.3s;
    object-fit: cover;
    margin: 10px;
    border-radius: 20px;
    animation: animateMovieThumb 0.5s;
    grid-template-columns: repeat(2, minmax(100px, 1fr));

    :hover {
      opacity: 0.8;
    }
    
  }
`;
