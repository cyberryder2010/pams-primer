const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all repo reference data
  const queryText = `SELECT reference.id, reference.title, reference.description, repo.date FROM "reference" JOIN "repo" ON "reference"."repo_id" = "repo"."id" ORDER BY "reference"."title" ASC;`;

  pool
    .query(queryText)
    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});
//setup a route to post a new repo to the database
router.post("/", (req, res) => {
  const newRepo = req.body;
  const sqlText = `INSERT INTO repo (link, author, date) VALUES 
($1, $2, $3)`;
  pool
    .query(sqlText, [newRepo.link, newRepo.author, newRepo.date])
    .then((result) => {
      console.log(`Added Repo to the database`, newRepo);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
