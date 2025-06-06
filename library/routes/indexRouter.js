const { Router } = require("express");
const fs = require("fs");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  fs.readFile('./pages/home.html', (err, data) => {
    if(err) throw new Error('err');
    res.write(data);
    res.end();
  })
});

module.exports = indexRouter;
