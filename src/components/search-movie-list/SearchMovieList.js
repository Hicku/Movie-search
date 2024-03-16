import React from "react";
import "./search-movie-list.css";
import SearchedMovie from "../searched-movie/SearchedMovie";

export default function SearchMovieList({ movieData }) {
  return (
    <div className="search-movie-list-container">
      {movieData?.map((movie) => (
        <card>
          <SearchedMovie movie={movie} />
        </card>
      ))}
    </div>
  );
}
