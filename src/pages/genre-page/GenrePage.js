import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByGenre } from "../../redux/actions/moviesActions";
import { apiConfig } from "../../api/apiConfig";
import Card from "../../components/card/Card";

const GenrePage = () => {
  const genreId = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((movies) => movies.movies.moviesByGenre.results);
  const ganre = useSelector((genres) => genres.genres.genres.genres);

  useEffect(() => {
    dispatch(fetchMoviesByGenre(genreId.genreId));
  }, [genreId]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col pt-3">
          {ganre?.map((title, index) => (
            <h1 className="title" key={index}>
              {title.id == genreId.genreId && title.name}
            </h1>
          ))}
        </div>
      </div>
      <div className="row">
        {movies?.map((movie, i) => (
          <div className="col-md-3 p-3" key={i}>
            <Card
              movieId={movie.id}
              imagePath={apiConfig.originalImage(movie.backdrop_path)}
              movies={movie}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
