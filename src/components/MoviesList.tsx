import { FC } from 'react';

import Movie from './Movie';

import { IMovies } from '../interfaces';
import classes from './MoviesList.module.css';

const MovieList: FC<IMovies> = ({ movies }) => {
  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
