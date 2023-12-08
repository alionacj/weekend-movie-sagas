const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const query = `
    SELECT "genres".name
      FROM "genres"
      JOIN "movies_genres"
        ON "genres".id = "movies_genres".genre_id
      JOIN "movies"
        ON "movies_genres".movie_id = "movies".id
      WHERE "movies".id = 1;
  `
  pool.query(query)
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.error('Genres GET failed:', error)
      res.sendStatus(500)
    })
});

module.exports = router;