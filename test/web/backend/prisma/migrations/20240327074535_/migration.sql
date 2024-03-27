/*
  Warnings:

  - Changed the type of `id1` on the `ProductVariant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id2` on the `ProductVariant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "id1",
ADD COLUMN     "id1" INTEGER NOT NULL,
DROP COLUMN "id2",
ADD COLUMN     "id2" INTEGER NOT NULL;
