import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import { apiConfig } from "../../api/apiConfig";
import { myListActions } from "../../redux/reducers/myListReducer";

const MyList = () => {
  const myList = useSelector((myList) => myList.myList.myList);
  const dispatch = useDispatch();

  const deleteMovieHandler = (id) => {
    dispatch(myListActions.deleteMovie(id));
  };

  return (
    <div className="container">
      <div className="row">
        {myList.length === 0 ? (
          <div className="col text-center pt-5">
            <span>No movies was added</span>
          </div>
        ) : (
          <>
            {myList.map((list, index) => (
              <div className="col-md-4 pt-4" key={index}>
                <Card
                  imagePath={apiConfig.originalImage(list.backdrop_path)}
                  movies={list}
                  movieId={list.id}
                />
                <div className="text-center p-2">
                  <button
                    onClick={() => {
                      deleteMovieHandler(list.id);
                    }}
                    type="button"
                    class="btn btn-outline-success btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyList;
