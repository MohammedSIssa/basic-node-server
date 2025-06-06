const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./public/index.html", (err, data) => {
    if (err) {
      return error(res);
    }
    success(res, data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./public/about.html", (err, data) => {
    if (err) {
      return error(res);
    }
    success(res, data);
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("./public/contact-me.html", (err, data) => {
    if (err) {
      return error(res);
    }
    success(res, data);
  });
});

app.get('/:userId/messages', (req,res) => {
  console.log('Params:',req.params);
  console.log('Query:',req.query);
  res.end();
})

app.get('/:userId/messages/:messageId', (req,res) => {
  console.log(req.params);
  res.end();
})

app.get('/{*splat}', (req, res) => {
  fs.readFile('./public/404.html', (err, data) => {
    success(res, data);
  })
})

app.listen(3000, () => console.log("Server runs on http://localhost:" + 3000));

function error(res) {
  res.status(404).send("Page not found!");
}

function success(res, data) {
  res.write(data);
  res.end();
}
