import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';
import Favorite from './Favorite';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <Favorite path="/favorite"/>
      <NotFound default />      
    </Router>
    <GlobalStyle />
  </>
)

export default App;