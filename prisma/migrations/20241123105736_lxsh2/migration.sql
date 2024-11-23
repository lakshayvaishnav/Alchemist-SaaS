/*
  Warnings:

  - You are about to drop the column `authorId` on the `Resource` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_authorId_fkey";

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "authorId";
