/*
  Warnings:

  - You are about to drop the column `imgae` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "imgae",
ADD COLUMN     "images" TEXT[];
