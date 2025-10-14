import { Router } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "ejs.html"));
});

export const ejsRoutes = router;
