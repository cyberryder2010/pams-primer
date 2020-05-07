CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
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




SELECT *
FROM "link";



SELECT *
FROM "repo";


SELECT *
FROM "tip_hint_trick";


SELECT *
FROM "video";

CREATE TABLE "user_reference"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "reference_id" INT REFERENCES "reference" NOT NULL
);

CREATE TABLE "tag_reference"
(
    "id" SERIAL PRIMARY KEY,
    "tag_id" INT REFERENCES "tag" NOT NULL,
    "reference_id" INT REFERENCES "reference" NOT NULL
);

