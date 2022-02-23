import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popular: [],
    top_rated: [],
    upcoming: [],
    moviesByGenre: [],
    selectedMovie: {},
    video: [],
  },
  reducers: {
    fetchPopularList(state, action) {
      state.popular = action.payload;
    },
    fetchTopRatedList(state, action) {
      state.top_rated = action.payload;
    },
    fetchUpcomingList(state, action) {
      state.upcoming = action.payload;
    },
    fetchMoviesByGenre(state, action) {
      state.moviesByGenre = action.payload;
    },
    fetchSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    fetchSelectedVideo(state, action) {
      state.video = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;
