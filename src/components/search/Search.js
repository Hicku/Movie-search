import React, { useState } from "react";

export default function Search({ searchedMovie, setSearchedMovie }) {
  return (
    <main>
      <form>
        <input
          value={searchedMovie}
          onChange={(e) => setSearchedMovie(e.target.value)}
          type="text"
        ></input>
      </form>
    </main>
  );
}
