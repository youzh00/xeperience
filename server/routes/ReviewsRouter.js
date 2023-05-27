const express = require("express");
const {
  getAllReviews,
  createReview,
  filterReviews,
  searchReviews,
} = require("../controllers/ReviewsController");

const router = express.Router();

router.route("/").get(getAllReviews).post(createReview);
router.route("/filter").get(filterReviews);
router.route("/search").get(searchReviews);

module.exports = router;
