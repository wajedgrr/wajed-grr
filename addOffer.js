function validerFormulaire(event)
{
    event.preventDefault();

    let titre = document.getElementById("title").value;
    let destination = document.getElementById("destination").value;
    let dateDepart = new Date(document.getElementById("departuredate").value);
    let dateRetour = new Date(document.getElementById("returndate").value);
    let prix = parseFloat(document.getElementById("price").value);

    if (titre.length < 3) {
        alert("Le titre doit contenir au moins 3 caracteres.");
        return false;
    }

    let Destination = /^[A-Za-z\s]{3,}$/;
    if (!Destination.test(destination)) {
        alert("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caracteres.");
        return false;
    }

    if (dateRetour <= dateDepart) {
        alert("La date de retour doit etre ulterieure a la date de depart.");
        return false;
    }

    if (isNaN(prix) || prix <= 0) {
        alert("Le prix doit etre un nombre positif.");
        return false;
    }

    alert("Formulaire valide !");
    return true;
}
