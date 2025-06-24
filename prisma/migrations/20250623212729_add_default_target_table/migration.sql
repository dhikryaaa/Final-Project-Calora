-- CreateTable
CREATE TABLE "DefaultTarget" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "dailyId" INTEGER NOT NULL,

    CONSTRAINT "DefaultTarget_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DefaultTarget" ADD CONSTRAINT "DefaultTarget_dailyId_fkey" FOREIGN KEY ("dailyId") REFERENCES "DailyTarget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
