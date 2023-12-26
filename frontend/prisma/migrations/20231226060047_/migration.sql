/*
  Warnings:

  - You are about to drop the column `desc` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `priceOld` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "desc",
DROP COLUMN "img",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isNew" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priceOld" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "shipping" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
