const router = require("express").Router();

module.exports = router;

router.get("/", (req, res) => {
  res.status(200).json({ msg: "up" });
});
