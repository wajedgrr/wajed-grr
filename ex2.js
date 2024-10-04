document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire si des erreurs sont présentes

    // Récupération des valeurs des champs
    const titre = document.getElementById("title").value;
    const destination = document.getElementById("destination").value;
    const dateDepart = new Date(document.getElementById("departuredate").value);
    const dateRetour = new Date(document.getElementById("returndate").value);
    const prix = parseFloat(document.getElementById("price").value);

    // Réinitialiser les messages d'erreur
    document.getElementById("titleError").textContent = "";
    document.getElementById("destinationError").textContent = "";
    document.getElementById("departureError").textContent = "";
    document.getElementById("returnError").textContent = "";
    document.getElementById("priceError").textContent = "";

    let valid = true;

    // Vérification du champ "Title"
    if (titre.length < 3) {
        document.getElementById("titleError").textContent = "Veuillez entrer un nom.";
        valid = false;
    }

    // Vérification du champ "Destination"
    let Destination = /^[A-Za-z\s]{3,}$/;
    if (!Destination.test(destination)) {
        document.getElementById("destinationError").textContent = "La destination doit contenir uniquement des lettres et au moins 3 caractères.";
        valid = false;
    }

    // Vérification des dates
    if (isNaN(dateDepart.getTime())) {
        document.getElementById("departureError").textContent = "Veuillez entrer une date de départ valide.";
        valid = false;
    }

    if (isNaN(dateRetour.getTime())) {
        document.getElementById("returnError").textContent = "Veuillez entrer une date de retour valide.";
        valid = false;
    } else if (dateRetour <= dateDepart) {
        document.getElementById("returnError").textContent = "La date de retour doit être ultérieure à la date de départ.";
        valid = false;
    }

    // Vérification du champ "Price"
    if (isNaN(prix) || prix <= 0) {
        document.getElementById("priceError").textContent = "Le prix doit être un nombre positif.";
        valid = false;
    }

    // Si tout est valide, soumettre le formulaire
    if (valid) {
        alert("Formulaire soumis avec succès !");
        // Ici tu peux ajouter l'envoi du formulaire ou tout autre traitement nécessaire
    }
});
