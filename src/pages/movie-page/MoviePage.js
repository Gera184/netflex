import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSelectedMovieAction,
  fetchVideo,
} from "../../redux/actions/moviesActions";
import { apiConfig } from "../../api/apiConfig";
import "./MoviePage.css";
import Modal from "../../components/modal/Modal";

const MoviePage = () => {
  const movieId = useParams();
  const dispatch = useDispatch();
  const selectedMovie = useSelector(
    (selectedMovie) => selectedMovie.movies.selectedMovie
  );

  useEffect(() => {
    dispatch(fetchSelectedMovieAction(movieId.movieId));
  }, [movieId]);

  const getVideoHandler = () => {
    dispatch(fetchVideo(selectedMovie.id));
  };

  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col text-center">
          <h1 className="movie-title">{selectedMovie.title}</h1>
        </div>
      </div>
      <div className="row ">
        <div className="col text-center">
          <h4 className="sub-title">
            <strong>{selectedMovie.tagline}</strong>
          </h4>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-12">
          <img
            className="movie-page-image img-thumbnail"
            src={apiConfig.originalImage(selectedMovie.backdrop_path)}
            alt="No image for this movie, use your imagination"
          />
        </div>
      </div>
      <div className="row">
        <div className="col pt-5">
          <p>{selectedMovie.overview}</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <p>release date: {selectedMovie.release_date}</p>
        </div>
        <div className="col">
          <p>
            budget:{" "}
            {selectedMovie.budget
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            ${" "}
          </p>
        </div>
        <div className="col">
          <p>adult movie: {selectedMovie.adult ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center p-3">
          <button
            onClick={getVideoHandler}
            type="button"
            className="btn green btn-md"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Trailer
          </button>
        </div>
      </div>
      <Modal title={selectedMovie.title} />
    </div>
  );
};

export default MoviePage;
