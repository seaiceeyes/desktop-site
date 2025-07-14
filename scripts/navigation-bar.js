const buttonContainer = document.querySelector(".button-menu");

const navBarButton = document.querySelector(".nav-bar-button");

const sleepButton = document.querySelector("[data-sleep-button]");
const sleepScreen = document.querySelector(".sleep-screen");

const shutDownButton = document.querySelector("[data-shut-down-button]");
const shutDown = document.querySelector(".shout-down");

const restartButton = document.querySelector("[data-restart-button]");
const restartScreen = document.querySelector(".restart-screen");


navBarButton.addEventListener('click', () => {
    buttonContainer.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!buttonContainer.contains(e.target) && e.target !== navBarButton) {
        buttonContainer.classList.remove("active");
    }
});

eventListener(shutDownButton, shutDown, 5000);
eventListener(restartButton, restartScreen, 2000);


function eventListener(buttonName, className, timeout) {
    buttonName.addEventListener("click", () => {
        className.classList.add("active");
        buttonContainer.classList.remove("active");

        setTimeout(() => {
            window.location.href = 'login.html';
            className.classList.remove("active");
        }, timeout);
    });
}

sleepButton.addEventListener("click", (e) => {
    e.stopPropagation();
    sleepScreen.classList.add("active");
    buttonContainer.classList.remove("active");
});

document.addEventListener("click", () => {
    if (sleepScreen.classList.contains('active')) {
        sleepScreen.classList.remove("active");
    }
});

