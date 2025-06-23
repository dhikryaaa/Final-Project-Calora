/*
  Warnings:

  - Added the required column `namaMakanan` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `takaranAwal` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "namaMakanan" TEXT NOT NULL,
ADD COLUMN     "takaranAwal" INTEGER NOT NULL;
