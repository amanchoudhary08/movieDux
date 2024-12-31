import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>

      {/* Check if the watchlist is empty */}
      {watchlist.length === 0 ? (
        <p className="no-movies-message">No movies in watchlist, add some!</p>
      ) : (
        <div className="watchlist">
          {watchlist.map((id) => {
            const movie = movies.find((movie) => movie.id === id);

            if (!movie) return null;
            return (
              <MovieCard
                key={id}
                movie={movie}
                iswatchlisted={true}
                toggleWatchlist={toggleWatchlist}
              ></MovieCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
