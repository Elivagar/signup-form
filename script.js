const inputs = document.querySelectorAll('input[required]');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const invitationCode = document.getElementById('invitation-code');

const validCodes = ['TROMSØ123', 'TROMSØ456', 'TROMSØ789'];

inputs.forEach(input => {
    let interacted = false;

    input.addEventListener('input', () => {
        interacted = true;
        if (input.validity.valid) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else if (input.value.trim() !== '') {
            input.classList.add('invalid');
            input.classList.remove('valid');
        } else {
            input.classList.remove('invalid', 'valid');
        }
    });

    input.addEventListener('blur', () => {
        if (!interacted || input.value.trim() === '') {
            input.classList.remove('invalid', 'valid');
        }
    });
});

repeatPassword.addEventListener('input', () => {
    if (repeatPassword.value === password.value) {
        repeatPassword.setCustomValidity('');
        repeatPassword.classList.add('valid');
        repeatPassword.classList.remove('invalid');
    } else {
        repeatPassword.setCustomValidity('Passwords do not match');
        repeatPassword.classList.add('invalid');
        repeatPassword.classList.remove('valid');
    }
});

repeatPassword.addEventListener('blur', () => {
    if (repeatPassword.value.trim() === '') {
        repeatPassword.setCustomValidity('');
        repeatPassword.classList.remove('valid', 'invalid');
    }
});

repeatPassword.addEventListener('input', () => {
    if (repeatPassword.value === password.value) {
        repeatPassword.classList.add('valid');
        repeatPassword.classList.remove('invalid');
    } else {
        repeatPassword.classList.add('invalid');
        repeatPassword.classList.remove('valid');
    }
});

invitationCode.addEventListener('input', () => {
    if (validCodes.includes(invitationCode.value.trim())) {
        invitationCode.setCustomValidity('');
        invitationCode.classList.add('valid');
        invitationCode.classList.remove('invalid');
    } else {
        invitationCode.setCustomValidity('Invalid code, contact me');
        if (invitationCode.value.trim() !== '') {
            invitationCode.classList.add('invalid');
            invitationCode.classList.remove('valid');
        } else {
            invitationCode.classList.remove('invalid', 'valid'); // Reset if empty
        }
    }
});

invitationCode.addEventListener('blur', () => {
    if (invitationCode.value.trim() === '') {
        invitationCode.setCustomValidity('');
        invitationCode.classList.remove('valid', 'invalid');
    }
});


// >>> LOGO HOVER ANIMATION <<<


document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const hero = document.querySelector(".hero");
    const form = document.querySelector("form");
    const runeCircles = document.querySelector(".rune-circles");
    const gradient = document.querySelector(".gradient");
    const main = document.querySelector("main");

    const journeyHome = document.createElement("div");
    journeyHome.classList.add("journey-home");
    journeyHome.textContent = "JOURNEY HOME";
    main.appendChild(journeyHome);

    // >>> HOVER ENTER <<<
    logo.addEventListener("mouseenter", () => {
        hero.style.opacity = "0";
        form.style.opacity = "0";
        gradient.style.opacity = "0";
        
        runeCircles.style.animationName = "spin-expand";
        runeCircles.style.animationDuration = "1600ms";
        runeCircles.style.animationTimingFunction = "ease-in-out";
        runeCircles.style.animationDirection = "forwards";
        runeCircles.style.animationFillMode = "forwards";

        journeyHome.style.opacity = "1";
    });

    logo.addEventListener("mouseleave", () => {
        hero.style.opacity = "1";
        form.style.opacity = "1";
        gradient.style.opacity = "1";

        runeCircles.style.animation = "spin-shrink 1600ms ease-in-out forwards";

        journeyHome.style.opacity = "0";
    });
});