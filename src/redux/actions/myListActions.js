import { myListActions } from "../reducers/myListReducer";

export const addToListAction = (movie) => {
  return (dispatch) => {
    dispatch(myListActions.addToList(movie));
  };
};

export const initialaizeListAction = (localStorageList) => {
  return (dispatch) => {
    dispatch(myListActions.initialaizeList(localStorageList));
  };
};
