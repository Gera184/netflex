import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/actions/moviesActions";
import { fetchGenres } from "./redux/actions/genresActions";
import { initialaizeListAction } from "./redux/actions/myListActions";
import Header from "./components/header/Header";
import "./App.css";
import Main from "./pages/main/Main";
import MoviePage from "./pages/movie-page/MoviePage";
import GenrePage from "./pages/genre-page/GenrePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MyList from "./pages/my-list/MyList";
import Modal from "./components/modal/Modal";

export default () => {
  const dispatch = useDispatch();
  const myList = useSelector((myList) => myList.myList.myList);

  useEffect(() => {
    const dataGetItem = JSON.parse(localStorage.getItem("my-movies"));
    if (dataGetItem) {
      dispatch(initialaizeListAction(dataGetItem));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-movies", JSON.stringify(myList));
  }, [myList]);

  useEffect(() => {
    dispatch(fetchMovies);
    dispatch(fetchGenres);
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Main} />
          <Route exact path="/home/movies/:movieId" component={MoviePage} />
          <Route exact path="/home/genres/:genreId" component={GenrePage} />
          <Route exact path="/my-list" component={MyList} />
          <Route path="*">
            <h1 className="text-center page-not-found"> 404 page not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
