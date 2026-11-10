import express from "express";
import { prisma } from "./db.js";
<<<<<<< HEAD
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors())
=======

const app = express();

app.use(express.json());
>>>>>>> 87a77166ab3b9f9593faf25fb01b93664aeb3637

app.get("/etudiants", async (req, res) => {
  const etudiants = await prisma.etudiant.findMany();
  res.json(etudiants);
<<<<<<< HEAD
  await prisma.$disconnect();
=======
>>>>>>> 87a77166ab3b9f9593faf25fb01b93664aeb3637
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

<<<<<<< HEAD
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
=======
>>>>>>> 87a77166ab3b9f9593faf25fb01b93664aeb3637
app.listen(3000);
