require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');
// const pg = require('pg');
const server = express();

//server.use(bodyParser.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.json()); 

// Cors prevents errors when we try to access the server from a different server location
server.use(cors());

const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
});


// GET: Fetch all movies from the database 
/*
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
*/

server.get('/', (req, res) => {
  db.query('SELECT * FROM movies', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(res.rows)
  })
})


// GET: Fetch movie by movieId from the database
/*
server.get('/:movieId', (req, res) => {
  const { movie_id } = req.params;
  db.select('*')
    .from('movies')
    //.where('movie_id', '=', movieId)
    .where({ movie_id })
    .then((movie) => {
      console.log(movie);
      res.status(200).json({ movie });
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not find movie with given id.", error: err.message });
      console.log(err);
    });
});
*/

server.get(':/movieId', (req, res) => {
  const movieId = req.params.movieId; 
  db.query('SELECT * FROM movies WHERE movie_id = movieId', [movieId], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  });
});


// POST: Create movies and add them to the database 
server.post('/add-movie', (req, res) => {
  // const addMovie  = req.body; 
  const { movieName, imgUrl, releaseYear, summary, director, genre, rating, movieRuntime, metaScore } = req.body;
  /*
  db('movies')
    .insert(addMovie)
    .then(movie => {
      console.log('Movie Added');
      res.status(201).json(movie)
    .catch((err) => {
      console.log('POST error', err);
      res.status(500).json({ message: "Could not add movie." });
    });
  */
  
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
    .into('movies')
    .then((movie) => {
      console.log('Movie Added');
      // return res.json({ movie })
      res.status(201).json({ movie })
    })
    .catch((err) => {
      console.log('POST error', err);
      res.status(500).json({ message: "Could not add movie." });
    });
    /*
    .then(() => {
      console.log('Movie Added');
      return res.json({ msg: 'Movie Added' });
    })
    .catch((err) => {
      console.log(err);
    });
    */ 
});

// PUT: Update movie by movieId from the database 
server.put('/update-movie', (req, res) => {
  db
    .select('*')
    .from('movies')
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

server.put('/:movieId', (req, res) => {
  const changes = req.body; 
  const { movie_id } = req.params; 
  // const movieId = req.params.movieId;

  db.select('*')
    .from('movies')
    //.where('movie_id', '=', movieId)
    .where({ movie_id })
    .update(changes)
    .then((updateMovie) => {
      if (updateMovie) {
        res.status(200).json({ updateMovie }); 
      } else {
        res
          .status(404)
          .json({ error: "Please provide the right movie information." }); 
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "There was an error updating.", error: err.message })
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
