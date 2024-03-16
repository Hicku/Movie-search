import React from "react";
import "./searched-movie.css";

export default function SearchedMovie({ movie }) {
  return (
    <div className="movie-container">
      <div>
        <h2>{movie.Title}</h2>
      </div>
      <div className="image-container">
        <img className="image" src={movie.Poster}></img>
      </div>
      <div>
        <div>{movie.rating}</div>
      </div>
      <div>
        <div>{movie.Year}</div>
      </div>
    </div>
  );
}
