/*
  Warnings:

  - Made the column `tenantId` on table `house` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "house" DROP CONSTRAINT "house_tenantId_fkey";

-- AlterTable
ALTER TABLE "house" ALTER COLUMN "tenantId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "house" ADD CONSTRAINT "house_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
