document.getElementById("monFormulaire").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire

    // Récupérer les éléments du formulaire
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;

    // Réinitialiser les messages d'erreur
    document.getElementById("nomErreur").textContent = "";
    document.getElementById("emailErreur").textContent = "";

    let valid = true;

    // Vérification du champ "Nom"
    if (nom === "") {
        document.getElementById("nomErreur").textContent = "Veuillez entrer un nom.";
        valid = false;
    }

    // Vérification du champ "Email"
    if (email === "") {
        document.getElementById("emailErreur").textContent = "Veuillez entrer une adresse email.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailErreur").textContent = "Veuillez entrer une adresse email valide.";
        valid = false;
    }

    if (valid) {
        // Si tous les champs sont valides, soumettre le formulaire
        alert("Formulaire soumis avec succès !");
        // Ici, tu peux envoyer le formulaire avec `form.submit()` ou autre traitement.
    }
});
