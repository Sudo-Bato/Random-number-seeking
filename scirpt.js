const discussion = document.getElementById("discussion");
const guessInput = document.getElementById("guess");
const btSend = document.getElementById("bt-send");
const btRestart = document.getElementById("bt-restart")
const sheetNumber = document.getElementById("sheetNumber");



let gameCount = 1
let target = Math.round(Math.random() * 99) + 1;
let guess;
let gameEnd = false;
let tryCount = 0;

btSend.addEventListener("click", () => {
    game(guessInput.value, target);
})

sheetNumber.innerHTML = `Partie numéro ${gameCount}`

btRestart.addEventListener("click", restartGame);

console.log(`Partie numéro ${gameCount} la target est ${target}`)

// fonction de jeu trop fou de malade //
function game(guess, target) {
    // on demande son guess à l'utilisateur
    
    // on check si il a entré une valeur valide
        // guess n'est pas un nombre valide
        if ( guess === "" || isNaN(guess) ) {
            discussion.innerHTML = "Il faut saisir une valeur numérique.";
            return false;
        }
        // guess est négatif // guess est supérieur à 100
        if ( guess < 0 || guess > 100) {
            discussion.innerHTML = "Vous devez choisir un nombre entre 1 et 100. (le compteur n'a pas bougé :) ";
            return false;
        }
        

    // on check si il veux finir (guess vaut 0) // on sort de la boucle = fin du jeu
    if ( guess == 0 ) {
        discussion.innerHTML = `Vous avez décidé de quitter le jeu. la réponse était ${target} `;
        sheetNumber.innerHTML = `Partie numéro ${gameCount}`
        return true;
    }

    // traitement normal on regarde le guess par rapport au target
    tryCount++
    // guess > target
    if ( guess > target ) {
        discussion.innerHTML = `Trop grand, il vous reste ${10 - tryCount} essai`;
        sheetNumber.innerHTML = `Partie numéro ${gameCount}`
    }
    // guess < target
    if ( guess < target ) {
        discussion.innerHTML = `Trop petit, il vous reste ${10 - tryCount} essai`;
    }
    // guess == target => gagné !!
    if ( guess == target && tryCount <= 10) {
        discussion.innerHTML = `Vous avez gagné en ${tryCount} essai`;
        return true // on sort de la boucle = fin du jeu
    }    

    if ( tryCount >= 10 ) {
        discussion.innerHTML = `Perdu..... Vous avez 
        atteint le nombre limite de tentative. Le
        bon nombre était ${target}, veuillez recommencer`;
        
        return true
    }
}

// fonction pour redémarrer le jeu
function restartGame() {
    // réinitialiser les valeurs
    target = Math.round(Math.random() * 99) + 1;
    tryCount = 0;
    // réinitialiser l'affichage 
    discussion.innerHTML = "Bienvenue sur le JEU ALEATOIRE"
    guessInput.value = "";
    gameCount++
    console.log(`Partie numéro ${gameCount} la target est ${target}`)
    sheetNumber.innerHTML = `Partie numéro ${gameCount}`
    
}
