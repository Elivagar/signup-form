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
const footer = document.querySelector("footer");

const showIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z" fill="#5E6264"/><path d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z" fill="#5E6264"/></svg>';
const hideIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.99773 11.4828L7.35544 11.125C7.80809 11.2229 8.30056 11.2184 8.80159 11.0917C9.92047 10.8135 10.8201 9.91389 11.0983 8.79502C11.225 8.29396 11.2296 7.80147 11.1317 7.3488L12.9269 5.55359C12.995 5.48545 13.1124 5.49133 13.1738 5.56931L13.1738 5.56932L13.1762 5.57238C13.3788 5.82559 13.5745 6.09705 13.757 6.38668C14.0133 6.79422 14.1642 7.37325 14.1717 7.97954C14.1792 8.58672 14.0422 9.1598 13.7901 9.56044L13.7895 9.5615C13.0454 10.7507 12.1314 11.6727 11.1307 12.2946C10.1495 12.8967 9.08625 13.2134 8.00001 13.2134C7.30315 13.2134 6.62415 13.0853 5.96691 12.8336C5.91938 12.815 5.88625 12.7759 5.87498 12.7179C5.8632 12.6574 5.88068 12.5998 5.92023 12.5603L6.99773 11.4828Z" fill="#5E6264" stroke="#5E6264"/><path d="M8.57344 6.71956L6.71956 8.57344C6.63867 8.39566 6.59338 8.20079 6.59338 8.00005C6.59338 7.22839 7.224 6.59338 8.00005 6.59338C8.20079 6.59338 8.39566 6.63867 8.57344 6.71956Z" fill="#5E6264" stroke="#5E6264"/><path d="M12.1667 3.83329L9.90671 6.09329C9.42004 5.59995 8.74671 5.30662 8.00004 5.30662C6.50671 5.30662 5.30671 6.51329 5.30671 7.99995C5.30671 8.74662 5.60671 9.41995 6.09337 9.90662L3.84004 12.1666H3.83337C3.09337 11.5666 2.41337 10.8 1.83337 9.89329C1.16671 8.84662 1.16671 7.14662 1.83337 6.09995C2.60671 4.88662 3.55337 3.93329 4.60671 3.27995C5.66004 2.63995 6.81337 2.28662 8.00004 2.28662C9.48671 2.28662 10.9267 2.83329 12.1667 3.83329Z" fill="#5E6264"/><path d="M9.90672 8.00005C9.90672 9.04672 9.05339 9.90672 8.00005 9.90672C7.96005 9.90672 7.92672 9.90672 7.88672 9.89339L9.89339 7.88672C9.90672 7.92672 9.90672 7.96005 9.90672 8.00005Z" fill="#5E6264"/><path d="M14.5133 1.48667C14.3133 1.28667 13.9867 1.28667 13.7867 1.48667L1.48667 13.7933C1.28667 13.9933 1.28667 14.32 1.48667 14.52C1.58667 14.6133 1.71334 14.6667 1.84667 14.6667C1.98 14.6667 2.10667 14.6133 2.20667 14.5133L14.5133 2.20667C14.72 2.00667 14.72 1.68667 14.5133 1.48667Z" fill="#5E6264"/></svg>';
const togglePasswordBtn = document.querySelectorAll(".toggle-password");


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

// PASSWORD VISIBILITY TOGGLE
togglePasswordBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const input = button.previousElementSibling;
    
        if (input.type === "password") {
            input.type = "text";
            button.innerHTML = hideIcon;
        } else {
            input.type = "password";
            button.innerHTML = showIcon;
        }
    });
});


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

    togglePasswordBtn.forEach((button) => {
        button.innerHTML = showIcon;
    });
});


// >>> LOGO HOVER ANIMATION <<<

const journeyHome = document.createElement("div");
journeyHome.classList.add("journey-home");
journeyHome.textContent = "HOMEPAGE";
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
            successMessage.style.transition = "opacity 800ms ease-in-out 400ms";
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