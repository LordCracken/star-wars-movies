export interface IMovie {
  title: string;
  releaseDate: string;
  openingText: string;
}

export interface IMovies {
  movies: IMovieData[];
}

export interface IAddMovie {
  onAddMovie: (movie: IMovieData) => void;
}

export interface IMovieData extends IMovie {
  id?: string;
}
