const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all image reference data
  const queryText = `SELECT * FROM "image" LEFT JOIN "reference" ON "image"."reference_id" = "reference"."id" ORDER BY "reference"."title" ASC;`;

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
//route to get data from the image table
router.post("/", (req, res) => {
  const newImage = req.body;
  const sqlText = `INSERT INTO "image" (title, alt_description, source) VALUES 
    ($1, $2, $3)`;
  pool
    .query(sqlText, [newImage.title, newImage.alt_description, newImage.source])
    .then((result) => {
      console.log(`Added Image to the database`, newImage);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
