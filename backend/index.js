require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');
const pg = require('pg');
const server = express();

// parse requests of content-type - application/json
server.use(express.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

// Cors prevents errors when we try to access the server from a different server location
server.use(cors());

const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
});


// GET: Fetch all movies from the database 
server.get('/', (req, res) => {
  db.select('*')
    .from('movies')
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET: Fetch movie by movieId from the database
server.get('/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  db.select('*')
    .from('movies')
    .where('movie_id', '=', movieId)
    .then((movie) => {
      console.log(movie);
      res.status(200).json(movie);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not find movie with given id.", error: err.message });
      console.log(err);
    });
});


// POST: Create movies and add them to the database 
server.post('/movie', (req, res) => {
  db('movies')
    .returning('movie_id')
    .insert({
      movie_name: req.body.movie_name,
      img_url: req.body.img_url,
      release_year: req.body.release_year,
      summary: req.body.summary,
      director: req.body.director,
      genre: req.body.genre,
      rating: req.body.rating,
      movie_runtime: req.body.movie_runtime,
      meta_score: req.body.meta_score,
    })
    .then(data => {
      console.log(data);
      res.json(data); 
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "There was an error adding the movie." })
    });
});

// PUT: Update movie by movieId from the database 
server.put('/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  const changes = req.body;
  db('movies')
    .where('movie_id', '=', movieId)
    .update(changes)
    .returning('movie_id')
    .then(() => {
      console.log('Movie updated');
      return res.json({ msg: 'Movie updated' });
    })
    .catch((err) => {
      console.log(err); 
    }); 
});


// DELETE: Delete movie by movieId from the database 
server.delete('/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  db('movies')
    .where('movie_id', '=', movieId)
    .del()
    .then(() => {
      console.log('Movie deleted');
      return res.json({ msg: 'Movie deleted' });
    })
    .catch((err) => {
      console.log(err); 
    });
});


const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}, http://localhost:${PORT}`));
