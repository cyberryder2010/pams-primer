const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const videoRouter = require("./routes/video.router");
const repoRouter = require("./routes/repo.router");
const linkRouter = require("./routes/link.router");
const imageRouter = require("./routes/image.router");
const glossaryRouter = require("./routes/glossary.router");
const noteRouter = require("./routes/note.router");
const thtRouter = require("./routes/tht.router");
const referenceRouter = require("./routes/reference.router");
const tagRouter = require("./routes/tag.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/video", videoRouter);
app.use("/api/repo", repoRouter);
app.use("/api/link", linkRouter);
app.use("/api/image", imageRouter);
app.use("/api/glossary", glossaryRouter);
app.use("/api/note", noteRouter);
app.use("/api/tip_hint_trick", thtRouter);
app.use("/api/reference", referenceRouter);
app.use("/api/tag", tagRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
