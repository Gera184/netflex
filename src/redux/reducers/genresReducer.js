import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
  },
  reducers: {
    fetchGenresList(state, action) {
      state.genres = action.payload;
    },
  },
});

export const genresActions = genresSlice.actions;

export default genresSlice.reducer;
