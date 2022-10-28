import { useState } from 'react';

import MoviesList from './components/MoviesList';

import { IMovieData } from './interfaces';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState<IMovieData[]>([]);

  const fetchMoviesHandler = async () => {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

    const transformedMovies = data.results.map((movieData: any) => ({
      id: movieData.episode_id,
      title: movieData.title,
      openingText: movieData.opening_crawl,
      releaseDate: movieData.release_date,
    }));
    setMovies(transformedMovies);
  };

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
};

export default App;
