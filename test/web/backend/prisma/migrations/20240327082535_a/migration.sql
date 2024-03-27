/*
  Warnings:

  - A unique constraint covering the columns `[id1]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id2]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_id1_key" ON "ProductVariant"("id1");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_id2_key" ON "ProductVariant"("id2");
