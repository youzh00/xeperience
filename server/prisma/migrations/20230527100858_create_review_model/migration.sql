-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `appID` VARCHAR(191) NOT NULL,
    `appStoreName` VARCHAR(191) NOT NULL,
    `reviewDate` DATETIME(3) NOT NULL,
    `rating` INTEGER NOT NULL,
    `version` VARCHAR(191) NOT NULL,
    `countryName` VARCHAR(191) NOT NULL,
    `reviewHeading` VARCHAR(191) NOT NULL,
    `reviewText` VARCHAR(191) NOT NULL,
    `reviewUserName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
