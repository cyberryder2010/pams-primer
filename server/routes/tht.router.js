const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all tip_hint_trick reference data
  const queryText = `SELECT * FROM "tip_hint_trick" LEFT JOIN "reference" ON "tip_hint_trick"."reference_id" = "reference"."id" ORDER BY "reference"."title" ASC;`;

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
//post route to add new tip hint or trick to reference data
router.post("/", (req, res) => {
  const newTht = req.body;
  const sqlText = `INSERT INTO "tip_hint_trick" (type, text) VALUES 
        ($1, $2)`;
  pool
    .query(sqlText, [newTht.term, newTht.definition])
    .then((result) => {
      console.log(`Added Tht to the database`, newTht);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
module.exports = router;
