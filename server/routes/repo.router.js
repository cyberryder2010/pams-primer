const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all repo reference data
  const queryText = `SELECT * FROM "reference" JOIN "repo" ON "reference"."repo_id" = "repo"."id" ORDER BY "reference"."title" ASC;`;

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

module.exports = router;
