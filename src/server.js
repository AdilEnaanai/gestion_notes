import express from "express";
import { prisma } from "./db.js";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors())

app.get("/etudiants", async (req, res) => {
  const etudiants = await prisma.etudiant.findMany();
  res.json(etudiants);
  await prisma.$disconnect();
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

app.put("/etudiants/:id",async (req, res) => {
    const id=Number(req.params.id)
  console.log(id)
  console.log(req.body)
  const etudiant = await prisma.etudiant.update({
    where:{id:id},
    data:req.body
  })


    await prisma.$disconnect();
  res.status(201).json(etudiant);
});

console.log("Server bien démarré")
app.listen(3000);
