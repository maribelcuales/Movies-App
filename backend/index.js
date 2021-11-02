const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE, 
  }
});

const app = express(); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// Cors prevents errors when we try to access the server from a different server location
app.use(cors());

app.get('/', (req, res) => res.send("Home Route"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
