import React from 'react';
import { Router } from '@reach/router';

import Header from './components/elements/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Favorite from './components/Favorite';

import { GlobalStyle } from './components/styles/GlobalStyle';



const App = () => (
  <>

    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <Favorite path="/favorite" />
      <NotFound default />
    </Router>
    <GlobalStyle />

  </>
)

export default App;