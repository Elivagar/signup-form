const inputs = document.querySelectorAll('input');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const invitationCode = document.getElementById('invitation-code');
const validCodes = ['TROMSØ123', 'TROMSØ456', 'TROMSØ789'];

const logo = document.querySelector(".logo");
const hero = document.querySelector(".hero");
const form = document.getElementById("dummyForm");
const runeCircles = document.querySelector(".rune-circles");
const gradient = document.querySelector(".gradient");
const main = document.querySelector("main");


// >>> FORM VALIDATION <<<

inputs.forEach(input => {
    let interacted = false;

    // DELETES ERROR WHEN EXITING EMPTY FIELD
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

// PASSWORD CHECK
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity('');
        confirmPassword.classList.add('valid');
        confirmPassword.classList.remove('invalid');
    } else {
        confirmPassword.setCustomValidity('Passwords do not match');
        confirmPassword.classList.add('invalid');
        confirmPassword.classList.remove('valid');
    }
});

confirmPassword.addEventListener('blur', () => {
    if (confirmPassword.value.trim() === '') {
        confirmPassword.setCustomValidity('');
        confirmPassword.classList.remove('valid', 'invalid');
    }
});

// INVITATION CODE CHECK
// invitationCode.addEventListener('input', () => {
//     if (validCodes.includes(invitationCode.value.trim())) {
//         invitationCode.setCustomValidity('');
//         invitationCode.classList.add('valid');
//         invitationCode.classList.remove('invalid');
//     } else {
//         invitationCode.setCustomValidity('Invalid code, contact me');
//         if (invitationCode.value.trim() !== '') {
//             invitationCode.classList.add('invalid');
//             invitationCode.classList.remove('valid');
//         } else {
//             invitationCode.classList.remove('invalid', 'valid'); // Reset if empty
//         }
//     }
// });

// invitationCode.addEventListener('blur', () => {
//     if (invitationCode.value.trim() === '') {
//         invitationCode.setCustomValidity('');
//         invitationCode.classList.remove('valid', 'invalid');
//     }
// });


// >>> FORM SUBMIT MESSAGE <<<

const successMessage = document.createElement("div");
let submitted = false;
successMessage.classList.add("success-message");
// successMessage.innerHTML = "<p>YOU'RE ALL SET, WELCOME!</p>";
successMessage.innerHTML = "<p>DUMMY FORM SUBMITTED, CLICK LOGIN TO RETURN TO FORM</p>";
successMessage.innerHTML = successMessage.innerHTML + "<button>LOG IN</button>";
main.appendChild(successMessage);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitted = true;

    form.style.opacity = "0";
    form.style.pointerEvents = "none";

    successMessage.style.pointerEvents = "auto";
    successMessage.style.opacity = "1";
});

const loginBtn = document.querySelector(".success-message button");

loginBtn.addEventListener("click", () => {
    submitted = false;

    successMessage.style.opacity = "0";
    successMessage.style.pointerEvents = "none";

    form.style.opacity = "1";
    form.style.pointerEvents = "auto";
    form.reset();
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
});


// >>> LOGO HOVER ANIMATION <<<

const journeyHome = document.createElement("div");
journeyHome.classList.add("journey-home");
journeyHome.textContent = "JOURNEY HOME";
main.appendChild(journeyHome);

document.addEventListener("DOMContentLoaded", () => {
    // HOVER ENTER
    logo.addEventListener("mouseenter", () => {
        if (submitted) {
            successMessage.style.opacity = "0";
            successMessage.style.transition = "opacity 400ms ease-in-out";
        }

        hero.style.opacity = "0";
        hero.style.pointerEvents = "none";
        form.style.opacity = "0";
        form.style.pointerEvents = "none";
        gradient.style.opacity = "0";
        
        runeCircles.style.animation = "spin-expand 1600ms ease-in-out forwards"
        runeCircles.style.animationFillMode = "forwards";

        journeyHome.style.pointerEvents = "auto";
        journeyHome.style.opacity = "0.64";
    });

    // HOVER LEAVE
    logo.addEventListener("mouseleave", () => {
        if (submitted) {
            successMessage.style.opacity = "1";
            successMessage.style.transition = "opacity 800ms ease-in-out 400ms"
        } else {
            form.style.opacity = "1";
            form.style.pointerEvents = "auto";
        }

        hero.style.opacity = "1";
        hero.style.pointerEvents = "auto";
        gradient.style.opacity = "1";

        runeCircles.style.animation = "spin-shrink 1600ms ease-in-out forwards";

        journeyHome.style.pointerEvents = "none";
        journeyHome.style.opacity = "0";
    });
});