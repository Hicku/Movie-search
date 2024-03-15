import "./App.css";
import Nav from "./components/nav/Nav";
import SearchMovieList from "./components/search-movie-list/SearchMovieList";
import WatchedMoviesList from "./components/watched-movies-list/WatchedMoviesList";

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main className="search-watch-list-container">
        <section className="list-component-containers">
          <SearchMovieList />
        </section>
        <section className="list-component-containers">
          <WatchedMoviesList />
        </section>
      </main>
    </div>
  );
}

export default App;
