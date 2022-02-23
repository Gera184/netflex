import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const genres = useSelector((genres) => genres.genres.genres.genres);

  return (
    <nav class="navbar navbar-dark navbar-expand-md  ">
      <div class="container-fluid  p-3 header">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/my-list">
                My list
              </Link>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 genres">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                {genres &&
                  genres.map((genre, index) => (
                    <li key={index}>
                      <Link
                        class="dropdown-item"
                        to={`/home/genres/${genre.id}`}
                      >
                        {genre.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
