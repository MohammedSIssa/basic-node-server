const { Router } = require("express");

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("GET all authors"));

authorRouter.get('/:authorId', (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
})

module.exports = authorRouter;