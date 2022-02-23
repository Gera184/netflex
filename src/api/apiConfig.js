const API_KEY = "3fa9fd919bfb9ff21a20aea8e6a4da3b";
export const apiConfig = {
  movieBaseUrl: (endPoint) =>`https://api.themoviedb.org/3/movie/${endPoint}?api_key=${API_KEY}&language=en-US`,
  moviesByGenreUrl:(genreId)=>`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
  getVideo:(movie_id)=>`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`,
  genreCategoriesUrl: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  search:(movieTitle)=>`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieTitle}&page=1`,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
};

export const endpoints = {
  popular: "popular",
  top_rated: "top_rated",
  upcoming: "upcoming",
};
