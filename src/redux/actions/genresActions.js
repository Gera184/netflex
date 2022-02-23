import axios from "axios";
import { genresActions } from "../reducers/genresReducer";
import { apiConfig } from "../../api/apiConfig";

function fetchData(callback) {
  axios
    .get(apiConfig.genreCategoriesUrl)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      return error;
    });
}

export const fetchGenres = (dispatch) => {
  fetchData((data) => {
    dispatch(genresActions.fetchGenresList(data));
  });
};
