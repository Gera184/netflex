import axios from "axios";
import { moviesActions } from "../reducers/movieReducer";
import { apiConfig, endpoints } from "../../api/apiConfig";

function fetchData(endPoint, callback) {
  axios
    .get(apiConfig.movieBaseUrl(endPoint))
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      return error;
    });
}

export const fetchMovies = (dispatch) => {
  Object.keys(endpoints).map((endPoint) => {
    switch (endPoint) {
      case "popular":
        return fetchData(endPoint, (data) => {
          dispatch(moviesActions.fetchPopularList(data));
        });
      case "top_rated":
        return fetchData(endPoint, (data) => {
          dispatch(moviesActions.fetchTopRatedList(data));
        });
      case "upcoming":
        return fetchData(endPoint, (data) => {
          dispatch(moviesActions.fetchUpcomingList(data));
        });
    }
  });
};

export const fetchMoviesByGenre = (id) => {
  return (dispatch) => {
    axios
      .get(apiConfig.moviesByGenreUrl(id))
      .then((response) => {
        dispatch(moviesActions.fetchMoviesByGenre(response.data));
      })
      .catch((error) => {
        return error;
      });
  };
};

export const fetchVideo = (id) => {
  return (dispatch) => {
    axios
      .get(apiConfig.getVideo(id))
      .then((response) => {
        dispatch(moviesActions.fetchSelectedVideo(response.data.results));
      })
      .catch((error) => {
        return error;
      });
  };
};

export const fetchSelectedMovieAction = (id) => {
  return (dispatch) => {
    fetchData(id, (data) => {
      dispatch(moviesActions.fetchSelectedMovie(data));
    });
  };
};
