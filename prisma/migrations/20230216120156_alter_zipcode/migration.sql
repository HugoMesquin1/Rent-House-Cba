/*
  Warnings:

  - Changed the type of `ZipCode` on the `house` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "house" DROP COLUMN "ZipCode",
ADD COLUMN     "ZipCode" INTEGER NOT NULL;
