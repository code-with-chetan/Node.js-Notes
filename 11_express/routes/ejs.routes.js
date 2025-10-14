import { Router } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "ejs.html"));
});

router.get("/report", (req, res) => {
  const student = {
    name: "chetan rana",
    semester: "fourth",
    subject: "information and technology",
  };

  return res.render("report", { student });
});

export const ejsRoutes = router;
