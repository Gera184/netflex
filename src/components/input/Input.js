import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Input.css";
import { apiConfig } from "../../api/apiConfig";
import { Link } from "react-router-dom";

const Input = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search) {
      axios
        .get(apiConfig.search(search))
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          return error;
        });
    } else {
      setMovies([]);
    }
  }, [search]);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <input
            className="search-input"
            placeholder="Type your search here..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="row" id="overlay">
        <div className="col text-center pt-2">
          {search && (
            <ul className="test" style={{ listStyleType: "none" }}>
              {movies.map((option, index) => (
                <Link
                  key={index}
                  style={{ color: "wheat" }}
                  to={`/home/movies/${option.id}`}
                >
                  <li>{option.title} </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
