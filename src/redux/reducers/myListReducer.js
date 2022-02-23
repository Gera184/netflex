import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "myList",
  initialState: {
    myList: [],
  },
  reducers: {
    addToList(state, action) {
      const newItem = action.payload;
      const existingItem = state.myList.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.myList.push(newItem);
        alert("Item added successfully");
      } else {
        alert("Item exist");
      }
    },
    initialaizeList(state, action) {
      state.myList = action.payload;
    },
    deleteMovie(state, action) {
      const id = action.payload;
      state.myList = state.myList.filter((item) => item.id !== id);
    },
  },
});

export const myListActions = myListSlice.actions;

export default myListSlice.reducer;
