const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  console.log(req.ip, "<<<--- IP")
  next();
})

router.get("/", (req, res) => {
  return res
  .status(200)
  .json('You have successfully connected');
})

export default router;