import { prisma } from "./db.js";
const etudiants = await prisma.etudiant.findMany();

console.log(etudiants);

const etudiant = await prisma.etudiant.findUnique({
  where: { id: 2 }
});
console.log(etudiant)
await prisma.$disconnect();