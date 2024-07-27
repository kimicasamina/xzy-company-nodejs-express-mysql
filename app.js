const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const staticFolder = path.join(__dirname, "public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticFolder));

// routes
app.get("/", function (req, res) {
  res.sendFile(path.join(staticFolder, "index.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(staticFolder, "login.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(staticFolder, "not_found.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server started at http://localhost:" + process.env.PORT);
});
