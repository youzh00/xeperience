const express = require("express");
const {
  getAllReviews,
  createReview,
} = require("../controllers/ReviewsController");

const router = express.Router();

router.route("/reviews").get(getAllReviews).post(createReview);

module.exports = router;
