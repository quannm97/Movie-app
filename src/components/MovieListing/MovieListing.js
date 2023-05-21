import React from "react";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
    const movies = useSelector(getAllMovies).payload;
    const shows = useSelector(getAllShows).payload;
    let renderMovies,renderShows = "";

    console.log(movies);
    if (movies && movies.results) {
        renderMovies = movies.results.map((movie, index) => {
            return <MovieCard key={index} data={movie}></MovieCard>;
        });
    }

    if (shows && shows.results) {
      renderShows = shows.results.map((movie, index) => {
          return <MovieCard key={index} data={movie}></MovieCard>;
      });
  }
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
            <div className="shows-list">
                <h2>Shows</h2>
                <div className="movie-container">{renderShows}</div>
            </div>
        </div>
    );
};

export default MovieListing;
