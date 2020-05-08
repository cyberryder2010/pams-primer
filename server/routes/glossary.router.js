const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all glossary reference data
  const queryText = `SELECT * FROM "glossary" ORDER BY "term" ASC;`;

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
//post route to add new glossary terms to reference data
router.post("/", (req, res) => {
  const newGlossary = req.body;
  const sqlText = `INSERT INTO "glossary" (term, definition) VALUES 
      ($1, $2)`;
  pool
    .query(sqlText, [newGlossary.term, newGlossary.definition])
    .then((result) => {
      console.log(`Added Glossary to the database`, newGlossary);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
