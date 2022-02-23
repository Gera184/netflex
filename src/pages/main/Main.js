import React from "react";
import Input from "../../components/input/Input";
import "./Main.css";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { apiConfig } from "../../api/apiConfig";

const Main = () => {
  const popular = useSelector((movie) => movie.movies.popular.results);
  const topRated = useSelector((movie) => movie.movies.top_rated.results);
  const upcoming = useSelector((movie) => movie.movies.upcoming.results);

  const movieConfig = [
    {
      title: "Popular",
      case: "popular",
      value: popular,
    },
    {
      title: "Top rated",
      case: "top_rated",
      value: topRated,
    },
    {
      title: "Upcoming",
      case: "upcoming",
      value: upcoming,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row pt-5 text-center">
        <div className="col ">
          <Input />
        </div>
      </div>
      <div className="container-fluid ">
        {movieConfig.map((v, index) => {
          switch (v.case) {
            case movieConfig[index].case:
              return (
                <div className="row pt-4" key={index}>
                  <h2 className="title">{v.title}</h2>
                  {v.value?.map((movie, i) => {
                    if (i < 4) {
                      return (
                        <div className="col-md-3" key={i + index}>
                          <Card
                            movieId={movie.id}
                            movies={movie}
                            imagePath={apiConfig.originalImage(
                              movie.backdrop_path
                            )}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              );
          }
        })}
      </div>
    </div>
  );
};

export default Main;
