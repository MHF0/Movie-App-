import React from 'react';
import { Link } from '@reach/router';
import { IconButton } from '@material-ui/core';

import RMDBLogo from '../images/reactMovie_logo.png';



import {
  StyledHeader,
  StyledRMDBLogo
} from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
      </Link>

      <Link to='/favorite'>
        <IconButton style={{ color: 'white', width: "122px", float: "right" }}>
          My Favorite
        
        </IconButton>
      </Link>

    </div>
  </StyledHeader>
)

export default Header;