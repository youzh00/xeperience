const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllReviews = async (req, res) => {
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
};

const filterReviews = async (req, res) => {
  const { appID, appStoreName, rating, countryName } = req.query;

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
};

const searchReviews = async (req, res) => {
  const { query } = req.query;

  const reviews = await prisma.review.findMany({
    where: {
      reviewText: {
        search: query + "*",
      },
      reviewHeading: {
        search: query + "*",
      },
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
};

module.exports = {
  getAllReviews,
  filterReviews,
  createReview,
  searchReviews,
};
