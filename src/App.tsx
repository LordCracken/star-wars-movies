import { useState } from 'react';

import MoviesList from './components/MoviesList';

import { IMovieData } from './interfaces';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState<IMovieData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) throw new Error('Something went wrong!');
      const data = await response.json();

      const transformedMovies = data.results.map((movieData: any) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));
      setMovies(transformedMovies);
    } catch (error) {
      setError((error as Error).message);
    }

    setIsLoading(false);
  };

  let content = <p>Found no movies.</p>;

  if (movies.length) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
