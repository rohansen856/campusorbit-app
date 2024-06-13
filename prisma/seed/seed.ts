import { PrismaClient } from "@prisma/client"

import { demiData } from "./data"

const prisma = new PrismaClient()

async function seed() {
  // the seeding scripts are sorted serially, not to break db constraints

  await prisma.institute.createMany({
    data: demiData.institute,
  })

  await prisma.courses.createMany({
    data: demiData.courses,
  })

  await prisma.account.createMany({
    data: demiData.account,
  })

  await prisma.profile.createMany({
    data: demiData.profile,
  })

  await prisma.admins.createMany({
    data: demiData.admins,
  })

  await prisma.analytics.createMany({
    data: demiData.analytics,
  })

  await prisma.clubs.createMany({
    data: demiData.clubs,
  })

  await prisma.mess.createMany({
    data: demiData.mess,
  })

  await prisma.routine.createMany({
    data: demiData.routine,
  })

  await prisma.routineChanges.createMany({
    data: demiData.routine_changes,
  })
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
