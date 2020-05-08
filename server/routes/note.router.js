const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all note reference data
  const queryText = `SELECT * FROM "note" ORDER BY "title" ASC;`;

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
//route to post new note reference data
router.post("/", (req, res) => {
  const newNote = req.body;
  const sqlText = `INSERT INTO "note" (title, date, text) VALUES 
  ($1, $2, $3)`;
  pool
    .query(sqlText, [newNote.title, newNote.text, newNote.date])
    .then((result) => {
      console.log(`Added Note to the database`, newNote);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
