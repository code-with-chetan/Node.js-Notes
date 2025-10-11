import express from "express";
import { PORT } from "./env.js";

const app = express();

// const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => res.send("<h1>Hello Home page.</h1>"));
app.get("/about", (req, res) => res.send("<h1>About page.</h1>"));
app.get("/contact", (req, res) => {
  return res.send(`
        
   <div class="container">
       <h1>URL Shortener</h1>
         <form id="shorten-form">
         <div>
            <label for="url">Enter URL:</label>
            <input type="url" name="url" id="url" required />
        </div>

        <div>
           <label for="shortCode">Enter shortCode:</label>
           <input type="text" name="shortCode" id="shortCode" required />
        </div>
          <button type="submit">Shorten</button>
      </form>

        <h2>Shortened URLS:</h2>
        <ul id="shortened-urls"></ul>
    </div>

  `);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
