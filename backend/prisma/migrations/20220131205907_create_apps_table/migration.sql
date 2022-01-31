-- CreateTable
CREATE TABLE `genres` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `genres_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `categories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `applications` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `logo_url` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `tags` TEXT NOT NULL,
    `website_url` VARCHAR(191) NULL,
    `telegram_url` VARCHAR(191) NULL,
    `dikalo_url` VARCHAR(191) NULL,
    `facebook_url` VARCHAR(191) NULL,
    `twitter_url` VARCHAR(191) NULL,
    `whatsapp_url` VARCHAR(191) NULL,
    `github_url` VARCHAR(191) NULL,
    `slack_url` VARCHAR(191) NULL,
    `linkedin_url` VARCHAR(191) NULL,
    `playstore_url` VARCHAR(191) NULL,
    `appstore_url` VARCHAR(191) NULL,
    `others_url` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,
    `genre_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `applications_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
