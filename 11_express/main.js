import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();
//prefer absolute path.
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  //   const _fileName = new URL(import.meta.url).pathname;
  //   console.log(_fileName);
  //   console.log(import.meta.dirname);
  //   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  //   res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log(`server running at http:localhost//${PORT}`);
});
