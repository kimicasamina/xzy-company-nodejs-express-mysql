const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();
const staticFolder = path.join(__dirname, "public");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ------ routes -------
app.get("/", function (req, res) {
  res.sendFile(path.join(staticFolder, "index.html"));
});

app.get("/services", function (req, res) {
  res.sendFile(path.join(staticFolder, "services.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(staticFolder, "about_us.html"));
});

app.get("/news", function (req, res) {
  res.sendFile(path.join(staticFolder, "news.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(staticFolder, "contact.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(staticFolder, "login.html"));
});

app.get("/dashboard", function (req, res) {
  res.sendFile(path.join(staticFolder, "dashboard.html"));
});

app.post("/auth", (req, res) => {
  const { username, password } = req.body;
  console.log("REQ:", username);

  if (username) {
    res.send({ message: "SUCCESS" });
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.join(staticFolder, "not_found.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server started at http://localhost:" + process.env.PORT);
});
