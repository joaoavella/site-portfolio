const titleElement = document.getElementById('typewriter');
//Frases que ficarão alterando
const phrases = [
    "Software Developer", 
    "Computer Science Student", 
    "Data & AI Enthusiast"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        titleElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        titleElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 1800; // Tempo parado na frase completa
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 300; // Tempo parado antes de começar a nova frase
    }

    setTimeout(type, typeSpeed);
}

// Inicializa a animação
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
});