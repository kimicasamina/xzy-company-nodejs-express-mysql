const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const dotenv = require("dotenv");
const { getUsers } = require("./database");
getUsers;

const app = express();
dotenv.config();
const staticFolder = path.join(__dirname, "public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.post("/auth", async (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    console.log(username + " " + password);

    const users = await getUsers();
    res.json(users);
  }

  // create db and tables
  // const db = await createDb();
  // console.log("DB: ", db);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(staticFolder, "not_found.html"));
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke");
});

app.listen(process.env.PORT, () => {
  console.log("Server started at http://localhost:" + process.env.PORT);
});
