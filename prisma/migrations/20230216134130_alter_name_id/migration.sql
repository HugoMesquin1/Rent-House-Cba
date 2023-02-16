/*
  Warnings:

  - You are about to drop the column `tenantId` on the `house` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "house" DROP CONSTRAINT "house_tenantId_fkey";

-- AlterTable
ALTER TABLE "house" DROP COLUMN "tenantId",
ADD COLUMN     "id_tenant" TEXT;

-- AddForeignKey
ALTER TABLE "house" ADD CONSTRAINT "house_id_tenant_fkey" FOREIGN KEY ("id_tenant") REFERENCES "tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
