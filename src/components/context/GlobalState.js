import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favorite: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : []
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(state.favorite));
    
  }, [state]);

  // actions
  const addMovieTofavorite = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITE", payload: movie });
  };

  const removeMovieFromfavorite = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITE", payload: id });
  };


  const moveTofavorite = (movie) => {
    dispatch({ type: "MOVE_TO_FAVORITE", payload: movie });
  };


  return (
    <GlobalContext.Provider
      value={{
        favorite: state.favorite,
        addMovieTofavorite,
        removeMovieFromfavorite,
        moveTofavorite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
