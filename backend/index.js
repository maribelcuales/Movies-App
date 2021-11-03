require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const pg = require('pg');
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

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}, http://localhost:${PORT}`));
