import { prisma } from "./db.js";

const etudiant = await prisma.etudiant.create({
  data: {
    nom: "Sara",
    email: "sara@gmail.com",
    age: 24
  }
});

console.log(etudiant);

await prisma.$disconnect();
