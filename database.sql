
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
);

CREATE TABLE "user_info"
(
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "street" VARCHAR,
    "city" VARCHAR,
    "state" VARCHAR,
    "zip" INT,
    "user_id" INT
);

CREATE TABLE "reference"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user_info" NOT NULL,
    "glossary_id" INT REFERENCES "glossary" NOT NULL,
    "image_id" INT REFERENCES "image" NOT NULL,
    "link_id" INT REFERENCES "link" NOT NULL,
    "note_id" INT REFERENCES "note" NOT NULL,
    "repo_id" INT REFERENCES "repo" NOT NULL,
    "tag_id" INT REFERENCES "tag" NOT NULL,
    "tip_hint_trick_id" INT REFERENCES "tip_hint_trick" NOT NULL,
    "video_id" INT REFERENCES "video" NOT NULL
);

CREATE TABLE "glossary"
(
    "id" SERIAL PRIMARY KEY,
    "term" VARCHAR,
    "definition" VARCHAR
);

CREATE TABLE "image"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "alt_description" VARCHAR,
    "source" VARCHAR
);

CREATE TABLE "link"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "description" VARCHAR,
    "date" DATE,
    "link" VARCHAR
);

CREATE TABLE "note"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "date" VARCHAR,
    "text" VARCHAR
);

CREATE TABLE "repo"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "description" VARCHAR,
    "author" VARCHAR,
    "link" VARCHAR,
    "date" DATE
);

CREATE TABLE "tag"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "name_id" INT
);

CREATE TABLE "tip_hint_trick"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "description" VARCHAR,
    "type" VARCHAR
);

CREATE TABLE "video"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "description" VARCHAR,
    "type" VARCHAR,
    "author" VARCHAR,
    "date" DATE
);

