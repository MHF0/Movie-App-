import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../images/reactMovie_logo.png';


import { 
    StyledHeader, 
    StyledRMDBLogo, 
    
} from '../styles/StyledHeader';


const Header = () => (
<StyledHeader>
  <div className="header-content">
    <Link to="/">
      <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
    </Link>
    
  </div>
</StyledHeader>
)

export default Header;