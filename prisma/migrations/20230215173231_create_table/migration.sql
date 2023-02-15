-- CreateTable
CREATE TABLE "tenant" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locator" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "locator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "house" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "ZipCode" TEXT NOT NULL,
    "Pool" BOOLEAN NOT NULL,
    "Garage" BOOLEAN NOT NULL,
    "tenantId" TEXT,

    CONSTRAINT "house_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tenant_username_key" ON "tenant"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_contact_key" ON "tenant"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "locator_username_key" ON "locator"("username");

-- CreateIndex
CREATE UNIQUE INDEX "locator_contact_key" ON "locator"("contact");

-- AddForeignKey
ALTER TABLE "house" ADD CONSTRAINT "house_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
