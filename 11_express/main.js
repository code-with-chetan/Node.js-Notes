import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

//prefer absolute path.
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: true }));
app.use((req, res) => {
  res.status(404).send("page not found.");
});

//In newer versions of Node.js (14.8+) ,you can use top-level await without needing to wrap it in an
//async function.
const response = await fetch(
  "https://official-joke-api.appspot.com/random_joke"
);
const data = await response.json();
console.log(data);

//form submission
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

//finding current directory and filepath.
// console.log(import.meta.dirname);
// console.log(import.meta.filename);

//query parameters.
// app.get("/product", (req, res) => {
//   console.log(req.query);
//   res.send(`<h1>Hello product page display:${req.query.search}</h1>`);
// });

//route parameters.
// app.get("/public/:username/article/:slug", (req, res) => {
//   console.log(req.params);
//   const formattedSlog = req.params.slug.replace(/-/g, " ");
//   res.send(
//     `<h1>Hello my name is ${req.params.username} by ${formattedSlog}</h1>`
//   );
// });

// app.get("/", (req, res) => {
//   const _fileName = new URL(import.meta.url).pathname;
//   console.log(import.meta.dirname);
//   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
//   res.sendFile(homePagePath);
// });

app.listen(PORT, () => {
  console.log(`server running at http:localhost//${PORT}`);
});
