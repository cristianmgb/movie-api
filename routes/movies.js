const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({ data: movies, message: 'movies listed' });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock[0]);
      res.status(200).json({ data: movies, message: 'movie recived' });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({ data: createMovieId, message: 'movie created' });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async (req, res, next) => {
    try {
      const updateMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({ data: updateMovieId, message: 'movie updated' });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', async (req, res, next) => {
    try {
      const deleteMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({ data: deleteMovieId, message: 'movie deleted' });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
