require("express-async-errors");
require("dotenv");
const express = require("express");
const cors = require("cors");
const reviewsRouter = require("./routes/ReviewsRouter");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const server = express();
server.use(cors({ credentials: true, origin: true }));
server.use(express.json());

server.use("/reviews", reviewsRouter);

server.get("/", (req, res) => {
  res.send("Hello, world!");
});
server.use(notFoundMiddleware);
server.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
