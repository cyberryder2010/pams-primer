
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

CREATE TABLE "video"
(
    "id" SERIAL PRIMARY KEY,
    "link" VARCHAR,
    "password" VARCHAR,
    "author" VARCHAR,
    "date" DATE
);

CREATE TABLE "repo"
(
    "id" SERIAL PRIMARY KEY,
    "link" VARCHAR,
    "author" VARCHAR,
    "date" DATE
);

CREATE TABLE "reference"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(100) UNIQUE NOT NULL,
    "description" VARCHAR(2000),
    "repo_id" INT REFERENCES "repo",
    "video_id" INT REFERENCES "video"
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
    "source" VARCHAR,
    "reference_id" INT REFERENCES "reference"
);

CREATE TABLE "link"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "description" VARCHAR,
    "link" VARCHAR,
    "date" DATE,
    "reference_id" INT REFERENCES "reference"
);

CREATE TABLE "note"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "date" VARCHAR,
    "text" VARCHAR,
    "reference_id" INT REFERENCES "reference"
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
    "type" VARCHAR,
    "text" VARCHAR,
    "reference_id" INT REFERENCES "reference"
);

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

--Inserts

INSERT INTO "user_info"
    ("first_name", "last_name", "street", "city", "state", "zip")
VALUES
    ('Pam', 'Anderson', '17001 Lakewood Court', 'Purcellville', 'VA', '20132'),
    ('Richard', 'Anderson', '17001 Lakewood Court', 'Purcellville', 'VA', '20132'),
    ('Barbara', 'Anderson', '17001 Lakewood Court', 'Purcellville', 'VA', '20132');

INSERT INTO "glossary"
    ("term", "definition")
VALUES
    ('REACT', 'A JavaScript library for building user interfaces'),
    ('*', 'splat'),
    ('/', 'whack');

INSERT INTO "image"
    ("title", "alt_description", "source")
VALUES
    ('REACT', 'REACT code screen', 'IMG_1989.jpeg'),
    ('color blocks', 'multiple buttons in colors', 'IMG_1926.jpeg'),
    ('DEV', 'MaddHatter Developer', 'IMG_1921.jpeg');

INSERT INTO "link"
    ("title", "description", "link", "date")
VALUES
    ('CSS Tricks', 'Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.', 'css-tricks.com', '5/5/2020');

INSERT INTO "link"
    ("title", "description", "link", "date")
VALUES
    ('REACT', 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
Declarative views make your code more predictable and easier to debug.', 'reactjs.org', '5/5/2020'),
    ('MDN web docs', 'The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps', 'developer.mozilla.org', '5/5/2020');

INSERT INTO "note"
    ("title", "date", "text")
VALUES
    ('Daily Standup', '5/5/2020', 'What did I do yesterday? What will I do today? What blocks do I have?'),
    ('How To Presentations', '5/6/2020', 'Introduce your team members initially with first and last name. When you pass off the presentation announce who you are passing to, remember to thank the person who passes off to you. Use more pictures and less text, bullet point text is good. Be careful about humor or trying to land a joke, this is difficult and iffy. A funny picture may work better'),
    ('Question&Answer', '5/5/2020', 'How can you make multiple queries using one API call? Reasearch Nested Promises or Nested Pool.');

INSERT INTO "repo"
    ("link", "author", "date")
VALUES
    ('https://github.com/scottbromander/ursus-full-stack-rest-cats', 'Scott Bromander', '4/24/2020'),
    ('https://github.com/myronschippers/cra-intro/tree/feature-react-intro', 'Myron Schippers', '4/28/2020'),
    ('https://github.com/myronschippers/ursus-backend-secure-route', 'Myron Schippers', '5/1/2020');

INSERT INTO "tag"
    ("name", "name_id")
VALUES
    ('REACT', '100'),
    ('Server', '200'),
    ('Client', '300');

INSERT INTO "tip_hint_trick"
    ("type", "text")
VALUES
    ('TIP', 'Save your Secure User Page for last test all of the other pages first'),
    ('HINT', 'Check for plurals words to make sure all instances are plural'),
    ('TRICK', 'To move an entire line of Code -- Highlight the line you want to move then hold down the Option key and use the up or down arrow to move the highlighted line to a new location');

INSERT INTO "video"
    ("link", "password", "author", "date")
VALUES
    ('https://vimeo.com/399266485', 'pr1me', 'Scott Bromander', '4/24/2020'),
    ('https://vimeo.com/401456078', 'pr1me', 'Myron Schippers', '4/20/2020'),
    ('https://vimeo.com/413167839', 'pr1me', 'Scott Bromander', '4/10/2020');

--video title and description for reference table
INSERT INTO "reference"
    ("title", "description")
VALUES
    ('Agile', 'a look at the Project Management structure for Software Development called Agile'),
    ('Recap End of Week Server (GET & POST), AJAX, & npm start', 'discussion of the items listed particularly npm dependencies'),
    ('Todo List Exercise (live solve)', 'To Do List Assignment Live Solve');

--repo title and descritions for reference table
INSERT INTO "reference"
    ("title", "description")
VALUES
    ('Full Stack REST with Cats', 'full stack restful API'),
    ('REACT Component Intro', 'Intro for REACT Components'),
    ('Backend Secure Routes', 'Security for the Server information');
