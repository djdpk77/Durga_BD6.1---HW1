const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());

const { getMovies, getMovieById, addMovie } = require('./movies');

app.get('/movies', (req, res) => {
  res.json(getMovies());
});

app.get('/movies/:id', (req, res) => {
  let id = parseInt(req.params.id);
  const movie = getMovieById(id);
  if (!movie) {
    return res.status(404).send({ message: 'Movie not found' });
  }
  res.json(movie);
});

app.post('/movies', (req, res) => {
  const newMovie = addMovie(req.body);
  res.status(201).json(newMovie);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
