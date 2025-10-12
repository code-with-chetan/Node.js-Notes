import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

//In newer versions of Node.js (14.8+) ,you can use top-level await without needing to wrap it in an
//async function.
const response = await fetch(
  "https://official-joke-api.appspot.com/random_joke"
);
const data = await response.json();
console.log(data);

//finding current directory and filepath.
console.log(import.meta.dirname);
console.log(import.meta.filename);

//prefer absolute path.
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  //   const _fileName = new URL(import.meta.url).pathname;
  //   console.log(import.meta.dirname);
  //   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  //   res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log(`server running at http:localhost//${PORT}`);
});
