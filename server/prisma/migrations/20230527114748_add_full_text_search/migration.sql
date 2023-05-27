-- CreateIndex
CREATE FULLTEXT INDEX `Review_reviewText_reviewHeading_idx` ON `Review`(`reviewText`, `reviewHeading`);
