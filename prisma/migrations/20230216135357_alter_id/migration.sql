/*
  Warnings:

  - You are about to drop the column `id_tenant` on the `house` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "house" DROP CONSTRAINT "house_id_tenant_fkey";

-- AlterTable
ALTER TABLE "house" DROP COLUMN "id_tenant",
ADD COLUMN     "tenantId" TEXT;

-- AddForeignKey
ALTER TABLE "house" ADD CONSTRAINT "house_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
