-- DropIndex
DROP INDEX "Promo_slug_key";

-- AlterTable
ALTER TABLE "Promo" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Slides" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Slides_pkey" PRIMARY KEY ("id")
);
