const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all link reference data
  const queryText = `SELECT reference.id, reference.title, reference.description, link.link FROM "reference" JOIN "link" ON "reference"."link_id" = "link"."id" ORDER BY "reference"."title" ASC;`;

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

//setup a route to post a new link to the database
router.post("/", (req, res) => {
  const newLink = req.body;
  const sqlText = `INSERT INTO link (title, description, link, date) VALUES 
  ($1, $2, $3, $4)`;
  pool
    .query(sqlText, [
      newLink.title,
      newLink.description,
      newLink.link,
      newLink.date,
    ])
    .then((result) => {
      console.log(`Added Link to the database`, newLink);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
