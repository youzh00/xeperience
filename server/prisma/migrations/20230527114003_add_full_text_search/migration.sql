-- CreateIndex
CREATE FULLTEXT INDEX `Review_reviewHeading_idx` ON `Review`(`reviewHeading`);

-- CreateIndex
CREATE FULLTEXT INDEX `Review_reviewText_idx` ON `Review`(`reviewText`);
