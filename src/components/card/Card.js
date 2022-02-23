import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToListAction } from "../../redux/actions/myListActions";

const Card = ({ imagePath, movies, movieId }) => {
  const dispatch = useDispatch();

  const addToListHandler = () => {
    dispatch(addToListAction(movies));
  };

  return (
    <div class="box">
      <img src={imagePath} alt="sorry no image" />
      <div class="box-content">
        <div class="content">
          <h3 class="title">{movies.title}</h3>
          <span class="post">release date: {movies.release_date}</span>
        </div>
        <ul class="icon">
          <li>
            <Link to={`/home/movies/${movieId}`}>
              <i class="fa fa-film"></i>
            </Link>
          </li>
          <li>
            <a onClick={addToListHandler}>
              <i class="fa fa-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
