import express from "express";
import path from "path";

const router = express.Router();
const staticFolder = path.join(__dirname, "public");

router.get("/", async (req, res) => {
  res.sendFile(path.join(staticFolder, "index.html"));
});

router.get("/services", async (req, res) => {
  res.sendFile(path.join(staticFolder, "services.html"));
});

router.get("/about", async (req, res) => {
  res.sendFile(path.join(staticFolder, "about_us.html"));
});

router.get("/news", async (req, res) => {
  res.sendFile(path.join(staticFolder, "news.html"));
});

router.get("/contact", async (req, res) => {
  res.sendFile(path.join(staticFolder, "contact.html"));
});

router.get("/dashboard", async (req, res) => {
  res.sendFile(path.join(staticFolder, "dashboard.html"));
});

router.get("*", async (req, res) => {
  res.sendFile(path.join(staticFolder, "not_found.html"));
});

export default router;
