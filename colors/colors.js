// On attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.color-input');

    // Fonction pour mettre à jour la couleur
    const updateColor = (input) => {
        const targetId = input.getAttribute('data-target');
        const display = document.getElementById(targetId);
        const colorValue = input.value;
        
        display.style.backgroundColor = colorValue;
    };

    // On initialise les couleurs au démarrage
    inputs.forEach(input => {
        updateColor(input);

        // On écoute chaque frappe de clavier
        input.addEventListener('input', () => {
            updateColor(input);
        });
    });
});
