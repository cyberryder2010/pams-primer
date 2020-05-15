const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all video Video data
  const queryText = `SELECT * FROM "reference" JOIN "video" ON "reference"."video_id" = "video"."id" ORDER BY "reference"."title" ASC;`;

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
// Setup a POST route to add a new video to the database
router.post("/", (req, res) => {
  const newVideo = req.body;
  const sqlText = `INSERT INTO video (link, password, author, date) VALUES 
($1, $2, $3, $4)`;
  pool
    .query(sqlText, [
      newVideo.link,
      newVideo.password,
      newVideo.author,
      newVideo.date,
    ])
    .then((result) => {
      console.log(`Added video to the database`, newVideo);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.put("/edit/:id", (req, res) => {
  // update a single video
  const queryText = `UPDATE "video"
    SET "link" = $1, "author" = $2, "date" = $3
    WHERE "id" = $4;`;
  const videoId = req.params.id;
  const newVideoData = req.body;

  pool
    .query(queryText, [
      // how is title coming to server
      newVideoData.link,
      // how to get the description
      newVideoData.author,
      newVideoData.date,
      videoId,
    ])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;
