const API_URL = "http://localhost:3000/etudiants";
let etudiantsCache = [];

async function chargerEtudiants() {
    try {
        const response = await axios.get(API_URL);
        const etudiants = response.data;
        etudiantsCache = etudiants;
        const tbody = document.getElementById("listeEtudiants");
        tbody.innerHTML = "";

        etudiants.forEach(etudiant => {
            const tr = document.createElement("tr");
            
            // Création des cellules de données
            const valeurs = [etudiant.id, etudiant.nom, etudiant.email, etudiant.age];
            valeurs.forEach(valeur => {
                const td = document.createElement("td");
                td.textContent = valeur;
                tr.appendChild(td);
            });

            // Cellule des actions
            const tdActions = document.createElement("td");
            
            const btnModifier = document.createElement("button");
            btnModifier.textContent = "Modifier";
            btnModifier.onclick = () => modifierEtudiant(etudiant.id);

            const btnSupprimer = document.createElement("button");
            btnSupprimer.textContent = "Supprimer";
            btnSupprimer.onclick = () => supprimerEtudiant(etudiant.id);

            tdActions.append(btnModifier, btnSupprimer);
            tr.appendChild(tdActions);
            tbody.appendChild(tr);
        });

    } catch (error) {
        console.error("Erreur de chargement :", error);
        alert("Impossible de charger les étudiants.");
    }
}


chargerEtudiants()


//###########################################################
const formulaire = document.getElementById("formEtudiant");

formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("id").value;
    
    const etudiant = {
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        age: Number(document.getElementById("age").value)
    };

    try {
        if (id === "") {
            // Mode AJOUT
            await axios.post(API_URL, etudiant);
            alert("Étudiant ajouté !");
        } else {
            // Mode MODIFICATION
            await axios.put(`${API_URL}/${id}`, etudiant);
            alert("Étudiant modifié !");
        }

        annulerModification();
        await chargerEtudiants();

    } catch (error) {
        console.error(error);
        alert("Erreur lors de l'enregistrement.");
    }
});



function modifierEtudiant(id) {
    const etudiant = etudiantsCache.find(e => e.id === id);
    if (!etudiant) return;

    // Remplissage du formulaire
    document.getElementById("id").value = etudiant.id;
    document.getElementById("nom").value = etudiant.nom;
    document.getElementById("email").value = etudiant.email;
    document.getElementById("age").value = etudiant.age;

    // Changement d'état du bouton
    document.getElementById("btnEnregistrer").textContent = "Modifier";
}

function annulerModification() {
    formulaire.reset();
    document.getElementById("id").value = "";
    document.getElementById("btnEnregistrer").textContent = "Ajouter";
}
