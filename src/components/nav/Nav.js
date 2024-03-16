import React from "react";
import Search from "../search/Search";
import "./nav.css";

export default function Nav({ searchedMovie, setSearchedMovie }) {
  return (
    <nav className="nav-container">
      <Search
        searchedMovie={searchedMovie}
        setSearchedMovie={setSearchedMovie}
      />
    </nav>
  );
}
