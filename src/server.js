import express from "express";
import { prisma } from "./db.js";

const app = express();

app.use(express.json());

app.get("/etudiants", async (req, res) => {
  const etudiants = await prisma.etudiant.findMany();
  res.json(etudiants);
});

app.post("/etudiants", async (req, res) => {
  const etudiant = await prisma.etudiant.create({
    data: req.body
  });
    await prisma.$disconnect();
  res.status(201).json(etudiant);
});

app.delete("/etudiants/:idEtud",async (req,res)=>{
    const idEtud = Number(req.params.idEtud);
    await prisma.etudiant.delete({
  where: { id:idEtud }
});
await prisma.$disconnect();
res.status(200).json();
})

app.listen(3000);
