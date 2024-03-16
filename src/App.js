import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import SearchMovieList from "./components/search-movie-list/SearchMovieList";
import WatchedMoviesList from "./components/watched-movies-list/WatchedMoviesList";

function App() {
  const key = "c74dc12b";
  const [searchedMovie, setSearchedMovie] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSearchedMovie = async function () {
      setIsLoading(true);
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${searchedMovie}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();

        if (data.Response === "false") throw new Error("Movie not found");

        setMovieData(data.Search);
        console.log(data.Search);
      } catch (error) {
        console.error("Error fetching movie data:", error.message);
      }
    };

    if (searchedMovie !== "") {
      getSearchedMovie(searchedMovie);
    }
  }, [searchedMovie]);

  return (
    <div className="App">
      <nav>
        <Nav
          searchedMovie={searchedMovie}
          setSearchedMovie={setSearchedMovie}
        />
      </nav>
      <main className="search-watch-list-container">
        <section className="list-component-containers">
          <SearchMovieList movieData={movieData} />
        </section>
        <section className="list-component-containers">
          <WatchedMoviesList />
        </section>
      </main>
    </div>
  );
}

export default App;
