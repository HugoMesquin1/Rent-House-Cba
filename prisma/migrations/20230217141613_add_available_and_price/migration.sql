/*
  Warnings:

  - Added the required column `available` to the `house` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `house` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "house" ADD COLUMN     "available" BOOLEAN NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
