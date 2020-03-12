const express = require("express");
const helmet = require("helmet");

// Posts & User Router
const postsRouter = require("./posts/postRouter.js");
const userRouter = require("./users/userRouter.js");

const server = express();

// Middleware - Global
server.use(express.json()); // built-in Middleware
server.use(helmet());

// routes - endpoints
server.use("/api/users", logger, userRouter);
server.use("/api/posts", postsRouter);

server.get("/", greeter, (req, res) => {
  res.send(`<h2>Let's write some middleware ${req.cohort}!</h2>`);
});


function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} Request to ${req.originalUrl}`
  );
  next();
}

function greeter(req, res, next) {
  req.cohort = "Web 26";
  next();
}

module.exports = server;