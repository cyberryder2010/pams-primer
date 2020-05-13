const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// get all tag  data
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "tag" ORDER BY "name" ASC;`;
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

//setup a route to post a new Tag to the database
router.post("/", (req, res) => {
  const newTag = req.body;
  const sqlText = `INSERT INTO tag (name, name_id) VALUES 
  ($1, $2)`;
  pool
    .query(sqlText, [newTag.link, newTag.author, newTag.date])
    .then((result) => {
      console.log(`Added Tag to the database`, newTag);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  const tagId = req.params.id;
  const queryString = `DELETE FROM "tag" WHERE "id" = $1;`;

  pool
    .query(queryString, [tagId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;
