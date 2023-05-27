const express = require("express");
const { getAllReviews } = require("../controllers/ReviewsController");

const router = express.Router();

router.get("/reviews", getAllReviews);

module.exports = router;
