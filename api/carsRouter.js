const router = require("express").Router();
const db = require("../data/connection");

module.exports = router;

router.get("/", (req, res) => {
  db("cars")
    .select("*")
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
