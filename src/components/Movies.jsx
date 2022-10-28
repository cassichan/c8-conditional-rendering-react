import { useState } from "react";

const genres = ["animation", "classic", "comedy", "drama", "horror"];

export default function Movies() {
  const [movieList, setMovieList] = useState();
  const getMovies = (genre) => {
    fetch(`https://api.sampleapis.com/movies/${genre}`)
      .then((response) => response.json())
      .then(setMovieList)
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="button-list">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => {
              getMovies(genre);
            }}
          >
            {genre.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="movie-list">
        {!movieList ? (
          <p>Loading...</p>
        ) : (
          movieList.map((movie) => <p key={movie.id}>{movie.title}</p>)
        )}
      </div>
    </>
  );
}
