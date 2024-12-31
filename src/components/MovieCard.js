import React from "react";
import "../styles.css";

export default function MovieCard({ movie, iswatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const movieRating = (rating) =>
    rating >= 8 ? "rating-good" : rating >= 5 ? "rating-ok" : "rating-bad";

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-class-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${movieRating(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={iswatchlisted}
              onChange={() => toggleWatchlist(movie.id)}
            ></input>

            <span className="slider">
              <span className="slider-label">
                {iswatchlisted ? "In watchList" : "Add to WatchList"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
