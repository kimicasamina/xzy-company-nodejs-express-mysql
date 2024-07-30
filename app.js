const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const dotenv = require("dotenv");
const session = require("express-session");
const { getUsers } = require("./database");
const { userInfo } = require("os");
getUsers;

const app = express();
dotenv.config();
const staticFolder = path.join(__dirname, "public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 1000 * 30,
    },
  })
);

// ------ routes -------
app.get("/", function (req, res) {
  console.log("REQ: ", req);
  const user = req.session.user;
  if (user) {
    console.log("IS AUTHENTICATED? ", user);
    return res.redirect("/dashboard");
  }
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

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === "Saucebot") {
    console.log(username + " " + password);
    req.session.user = username;
    req.session.opp = 1;
    console.log("SESSION: ", req.session);
    // res.redirect("/dashboard");
    res.json({ status: "success", message: "Login Succeed", username });
    // const users = await getUsers();
    // console.log("USERS: ", users);
    // res.json({ message: "Logged in Successfully" });
    // res.end();
  } else {
    res.json({ status: "error", message: "Login Failed" });
  }

  // create db and tables
  // const db = await createDb();
  // console.log("DB: ", db);
});

app.get("/logout", function (req, res) {
  if (req.session.user) {
    req.session.destroy(function () {
      res.redirect("/");
    });
  }
});

app.get("/dashboard", function (req, res) {
  res.sendFile(path.join(staticFolder, "dashboard.html"));
  // if (req.session.user) {
  //   // res.json({ message: "You are logged in" });
  // } else {
  //   res.send("You are not authenticated, please logged in.");
  // }
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
