import styled from 'styled-components';

export const StyledFavorite = styled.div`
.favoritelist{
  display: flex;
  flex-wrap:wrap;

}
  img {
    /* min-height: 340px; */
    object-fit: cover;
    margin: 10px;
    border-radius: 20px;

    :hover {
      opacity: 0.8;
    }
    
  }

  
`;
