const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.post("/", (req, res) => {
  const newReference = req.body;
  const sqlText = `INSERT INTO "reference" (title, description) VALUES 
  ($1, $2)`;
  pool
    .query(sqlText, [newReference.link, newReference.author, newReference.date])
    .then((result) => {
      console.log(`Added Reference to the database`, newReference);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
