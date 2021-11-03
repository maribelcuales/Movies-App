require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const { application } = require('express');
// const pg = require('pg');
const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json()); 

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
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
}); 

// POST: Create movies and add them to the database 
server.post('/add-movie', (req, res) => {
  const { movieName, imgUrl, releaseYear, summary, director, genre, rating, movieRuntime, metaScore } = req.body;
  db('movies')
    .insert({
      movie_name: movieName,
      img_url: imgUrl,
      release_year: releaseYear,
      summary: summary,
      director: director,
      genre: genre,
      rating: rating,
      movie_runtime: movieRuntime,
      meta_score: metaScore,
    })
    .then(() => {
      console.log('Movie Added');
      return res.json({ msg: 'Movie Added' });
    })
    .catch((err) => {
      console.log(err);
    });
}); 

// PUT: Update movie by movieId from the database 
server.put('/update-movie', (req, res) => {
  db('movies')
    .where('movie_id', '=', 1)
    .update({ movie_name: 'Goldeneye' })
    .then(() => {
      console.log('Movie updated');
      return res.json({ msg: 'Movie updated' });
    })
    .catch((err) => {
      console.log(err); 
    }); 
});

// DELETE: Delete movie by movieId from the database 
server.delete('/delete-movie', (req, res) => {
  const movieId = req.body;
  const movieIdToDelete = Number(movieId.movieId);
  console.log(movieIdToDelete);
  db('movies')
    .where('movie_id', '=', movieIdToDelete)
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
