import { prisma } from "./db.js";
const etudiants = await prisma.etudiant.findMany();

console.log(etudiants);

await prisma.$disconnect();