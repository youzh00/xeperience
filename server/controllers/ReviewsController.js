const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany();
    const modifiedReviews = reviews.map((review) => ({
      id: review.id,
      appID: review.appID,
      appStoreName: review.appStoreName,
      reviewDate: review.reviewDate.toISOString(),
      rating: review.rating,
      version: review.version,
      countryName: review.countryName,
      reviewHeading: review.reviewHeading,
      reviewText: review.reviewText,
      reviewUserName: review.reviewUserName,
    }));

    res.json({ reviews: modifiedReviews });
  } catch (error) {
    console.error("Error retrieving reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createReview = async (req, res) => {
  const {
    appID,
    appStoreName,
    reviewDate,
    rating,
    version,
    countryName,
    reviewHeading,
    reviewText,
    reviewUserName,
  } = req.body;

  try {
    const review = await prisma.review.create({
      data: {
        appID,
        appStoreName,
        reviewDate,
        rating,
        version,
        countryName,
        reviewHeading,
        reviewText,
        reviewUserName,
      },
    });

    res.json({ review });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const filterReviews = async (req, res) => {
  const { appID, appStoreName, rating, countryName } = req.query;

  try {
    const reviews = await prisma.review.findMany({
      where: {
        appID: appID ? appID : undefined,
        appStoreName: appStoreName ? appStoreName : undefined,
        rating: rating ? parseInt(rating, 10) : undefined,
        countryName: countryName ? countryName : undefined,
      },
    });

    const modifiedReviews = reviews.map((review) => ({
      id: review.id,
      appID: review.appID,
      appStoreName: review.appStoreName,
      reviewDate: review.reviewDate.toISOString(),
      rating: review.rating,
      version: review.version,
      countryName: review.countryName,
      reviewHeading: review.reviewHeading,
      reviewText: review.reviewText,
      reviewUserName: review.reviewUserName,
    }));

    res.json({ reviews: modifiedReviews });
  } catch (error) {
    console.error("Error filtering reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getAllReviews,
  createReview,
  filterReviews,
};
