-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Charactersheet" (
    "characterName" TEXT NOT NULL,
    "personalityTrais" TEXT,
    "ideals" TEXT,
    "bonds" TEXT,
    "flaws" TEXT,
    "armorClass" INTEGER NOT NULL,
    "initiative" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "hitPointMaximum" INTEGER NOT NULL,
    "currentHitPoints" INTEGER NOT NULL,
    "temporaryHitPoints" INTEGER NOT NULL,
    "passiveWisdom" INTEGER NOT NULL,
    "inspiration" BOOLEAN NOT NULL,
    "proficiencyBonus" INTEGER NOT NULL,
    "experiencePoints" INTEGER NOT NULL,
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Charactersheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharactersheetClass" (
    "level" INTEGER NOT NULL,
    "charactersheetId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,

    CONSTRAINT "CharactersheetClass_pkey" PRIMARY KEY ("charactersheetId","classId")
);

-- CreateTable
CREATE TABLE "Class" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharactersheetRace" (
    "raceId" TEXT NOT NULL,
    "charactersheetId" TEXT NOT NULL,

    CONSTRAINT "CharactersheetRace_pkey" PRIMARY KEY ("raceId","charactersheetId")
);

-- CreateTable
CREATE TABLE "Race" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharactersheetBackground" (
    "charactersheetId" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,

    CONSTRAINT "CharactersheetBackground_pkey" PRIMARY KEY ("charactersheetId","backgroundId")
);

-- CreateTable
CREATE TABLE "Background" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharactersheetAlignment" (
    "charactersheetId" TEXT NOT NULL,
    "alignmentId" TEXT NOT NULL,

    CONSTRAINT "CharactersheetAlignment_pkey" PRIMARY KEY ("charactersheetId","alignmentId")
);

-- CreateTable
CREATE TABLE "Alignment" (
    "alignment" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharactersheetAttribute" (
    "charactersheetId" TEXT NOT NULL,
    "attributeId" TEXT NOT NULL,

    CONSTRAINT "CharactersheetAttribute_pkey" PRIMARY KEY ("charactersheetId","attributeId")
);

-- CreateTable
CREATE TABLE "Attribute" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharactersheetSkill" (
    "charactersheetId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "CharactersheetSkill_pkey" PRIMARY KEY ("charactersheetId","skillId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "attributeId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Charactersheet" ADD CONSTRAINT "Charactersheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetClass" ADD CONSTRAINT "CharactersheetClass_charactersheetId_fkey" FOREIGN KEY ("charactersheetId") REFERENCES "Charactersheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetClass" ADD CONSTRAINT "CharactersheetClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetRace" ADD CONSTRAINT "CharactersheetRace_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetRace" ADD CONSTRAINT "CharactersheetRace_charactersheetId_fkey" FOREIGN KEY ("charactersheetId") REFERENCES "Charactersheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetBackground" ADD CONSTRAINT "CharactersheetBackground_charactersheetId_fkey" FOREIGN KEY ("charactersheetId") REFERENCES "Charactersheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetBackground" ADD CONSTRAINT "CharactersheetBackground_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetAlignment" ADD CONSTRAINT "CharactersheetAlignment_charactersheetId_fkey" FOREIGN KEY ("charactersheetId") REFERENCES "Charactersheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetAlignment" ADD CONSTRAINT "CharactersheetAlignment_alignmentId_fkey" FOREIGN KEY ("alignmentId") REFERENCES "Alignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetAttribute" ADD CONSTRAINT "CharactersheetAttribute_charactersheetId_fkey" FOREIGN KEY ("charactersheetId") REFERENCES "Charactersheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetAttribute" ADD CONSTRAINT "CharactersheetAttribute_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetSkill" ADD CONSTRAINT "CharactersheetSkill_charactersheetId_fkey" FOREIGN KEY ("charactersheetId") REFERENCES "Charactersheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharactersheetSkill" ADD CONSTRAINT "CharactersheetSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
