document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire

    // Récupérer les valeurs des champs
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Vérifier que les champs ne sont pas vides
    if (nom && email && message) {
        alert(`Merci, ${nom} ! Votre message a bien été envoyé.`);
        // Vider le formulaire
        document.getElementById('contact-form').reset();
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});