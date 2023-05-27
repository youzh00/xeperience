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

module.exports = {
  getAllReviews,
};
