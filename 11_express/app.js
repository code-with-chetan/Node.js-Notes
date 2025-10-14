import express from "express";
import { ejsRoutes } from "./routes/ejs.routes.js";

const PORT = 3003;
const app = express();

app.use(express.static("public2"));
app.set("view engine", "ejs");

app.use("/", ejsRoutes);

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
