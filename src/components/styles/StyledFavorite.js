import styled from 'styled-components';

export const StyledFavorite = styled.div`
.favoritebutton{
    fontSize: 50;
    color: 'black';
    width: "100%";
  }
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
