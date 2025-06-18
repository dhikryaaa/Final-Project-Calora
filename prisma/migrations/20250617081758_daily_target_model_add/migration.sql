/*
  Warnings:

  - Changed the type of `hari` on the `Menu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "hari",
ADD COLUMN     "hari" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "DailyTarget" (
    "id" SERIAL NOT NULL,
    "target" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyTarget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyTarget_userId_date_key" ON "DailyTarget"("userId", "date");

-- AddForeignKey
ALTER TABLE "DailyTarget" ADD CONSTRAINT "DailyTarget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
