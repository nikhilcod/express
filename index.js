const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

//Database
const db = require("./config/database");

//Test DB
db.authenticate()
  .then(() => console.log("Database Connected..."))
  .catch((error) => console.log("Error: " + error));

const app = express();

app.get("/", (req, res) => res.send(`INDEX`));

//a routes
app.use("/gigs", require("./routes/gigs"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
