let { getMovies, getMovieById, addMovie } = require('../movies');

describe('Movies API', () => {
  it('should return all movies', () => {
    const movies = getMovies();
    expect(movies).toHaveLength(4);
    expect(movies).toEqual([
      { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
      { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
      { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' },
      { id: 4, title: 'Pulp Fiction', director: 'Quentin Tarantino' },
    ]);
  });

  it('should return a movie by id', () => {
    const movie = getMovieById(1);
    expect(movie).toEqual({
      id: 1,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
    });
  });

  it('should return undefined for a non-existent movie id', () => {
    const movie = getMovieById(99);
    expect(movie).toBeUndefined();
  });

  it('should add a movie', () => {
    const newMovie = { title: 'The Matrix', director: 'The Wachowskis' };
    const addedMovie = addMovie(newMovie);
    expect(addedMovie).toEqual({ id: 5, ...newMovie });
    expect(getMovies()).toHaveLength(5);
  });
});
