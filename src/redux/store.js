import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";
import genresReducer from "./reducers/genresReducer";
import myListReducer from "./reducers/myListReducer";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    genres: genresReducer,
    myList: myListReducer,
  },
});

export default store;
