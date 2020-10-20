const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

//Get gig list
router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((error) => console.log("Error: " + error))
);

//Add a gig
router.get("/add", (req, res) => {
  const data = {
    name: "Nikhil Gupta",
    age: "23",
  };

  let { name, age } = data;

  //Insert into table
  Gig.create({
    name,
    age,
  })
    .then((gigs) => res.redirect("/gigs"))
    .catch((error) => console.log("Error: " + error));
});

module.exports = router;
