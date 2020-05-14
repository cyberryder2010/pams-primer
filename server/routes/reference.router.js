const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // get all reference data
  const queryText = `SELECT * FROM "reference"
    LEFT JOIN "tag_reference" ON "reference".id = "tag_reference".reference_id
    LEFT JOIN "tag" ON "tag_reference".tag_id = "tag".id
    LEFT JOIN "video" ON "reference"."video_id" = "video"."id" 
    LEFT JOIN "repo" ON "reference"."repo_id" = "repo"."id"
    LEFT JOIN "link" ON "reference"."id" = "link"."reference_id"
    LEFT JOIN "note" ON "reference"."id" = "note"."reference_id"  
    LEFT JOIN "tip_hint_trick" ON "reference"."id" = "tip_hint_trick"."reference_id" 
    ORDER BY "reference".title ASC`;

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

router.post("/", (req, res) => {
  //save reference
  const newReference = req.body;
  const sqlText = `INSERT INTO "reference" (title, description) VALUES 
  ($1, $2)`;
  pool
    .query(sqlText, [newReference.title, newReference.description])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.put("/edit/:id", (req, res) => {
  // update a single reference
  const queryText = `UPDATE "reference"
    SET "title" = $1, "description" = $2
    WHERE "id" = $3;`;
  const referenceId = req.params.id;
  const newReferenceData = req.body;

  pool
    .query(queryText, [
      // how is title coming to server
      newReferenceData.title,
      // how to get the description
      newReferenceData.description,
      referenceId,
    ])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  const referenceId = req.params.id;
  const queryString = `DELETE FROM "reference" WHERE "id" = $1;`;

  pool
    .query(queryString, [referenceId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.get("/tag/:id", (req, res) => {
  // get a single references' data
  const queryString = `SELECT "tag_reference".id, "tag_reference".reference_id, "tag_reference".tag_id, "reference".title, "tag".name FROM "reference"
    JOIN "tag_reference" ON "reference".id = "tag_reference".reference_id
    JOIN "tag" ON "tag_reference".tag_id = "tag".id
    WHERE "reference".id = $1;`;
  const referenceId = req.params.id;

  pool
    .query(queryString, [referenceId])
    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.delete("/tag/:junctionId", (req, res) => {
  const referenceTagId = req.params.junctionId;
  const queryString = `DELETE FROM "tag_reference" WHERE "id" = $1;`;

  pool
    .query(queryString, [referenceTagId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.post("/tag", (req, res) => {
  const referenceTagData = req.body;
  const queryString = `INSERT INTO "tag_reference" ("reference_id", "tag_id")
    VALUES ($1, $2);`;

  pool
    .query(queryString, [
      referenceTagData.reference_id,
      referenceTagData.tag_id,
    ])
    .then((responseDb) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;

// "reference".id, "reference".title, "reference".description, array_agg("tag".name) as "tag"
