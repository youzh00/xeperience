const express = require("express");
const reviewsRouter = require("./routes/ReviewsRouter");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors({ credentials: true, origin: true }));

server.use("/api", reviewsRouter);

server.get("/", (req, res) => {
  res.send("Hello, world!");
});
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
