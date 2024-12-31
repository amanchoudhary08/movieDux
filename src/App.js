import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/moviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((Response) => Response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  /*
    prev.includes(movieId): Checks if the movie with the given movieId is already in the current watchlist
    (prev is the previous state of the watchlist).

    If the movie is already in the watchlist (true), it removes the movie by using the filter() method.
    prev.filter((id) => id !== movieId) =>
        creates a new array with all the items except the one that matches movieId.

    If the movie is not in the watchlist (false), it adds the movie to the watchlist by using the 
    spread operator (...prev) to copy the existing watchlist and appending the new movieId to it.

    [...prev, movieId] creates a new array with all the existing movie IDs and adds the movieId at the end.
  */

  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
