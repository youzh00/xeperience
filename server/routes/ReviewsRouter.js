const express = require("express");
const {
  getAllReviews,
  createReview,
  filterReviews,
} = require("../controllers/ReviewsController");

const router = express.Router();

router.route("/").get(getAllReviews).post(createReview);
router.route("/filter").get(filterReviews);

module.exports = router;
