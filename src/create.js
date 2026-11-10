import { prisma } from "./db.js";

const etudiant = await prisma.etudiant.create({
  data: {
    nom: "Ahmed",
    email: "ahmed@gmail.com",
    age: 21
  }
});

console.log(etudiant);

await prisma.$disconnect();
