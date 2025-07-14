const windowContainer = document.querySelector(".windows-container");
const navBarContainer = document.querySelector("[data-nav-bar-container]");

const workWindow = document.createElement('div');
const educationWindow = document.createElement('div');
const skillsWindow = document.createElement('div');

const inWindowsText = document.querySelector(".windows-text");
const WindowBarText = document.querySelector(".window-bar-text");

const workButtonText = document.querySelector("[data-work-button-text]").textContent;
const educationButtonText = document.querySelector("[data-education-button-text]").textContent;
const skillsButtonText = document.querySelector("[data-skills-button-text]").textContent;

const workButton = document.querySelector("[data-work-button]");
const githubButton = document.querySelector("[data-github-button]");
const educationButton = document.querySelector("[data-education-button]");
const emailButton = document.querySelector("[data-email-button]");
const skillsButton = document.querySelector("[data-skills-button]");

const windowsCloseButton = document.querySelector("[data-window-close-button]");

const windowChilds = windowContainer.querySelectorAll(".general-window");



function createWorkWindow() {
    workWindow.classList.add('general-window', 'work-window');
    windowContainer.appendChild(workWindow);
}

function createEducationWindow() {
    educationWindow.classList.add('general-window', 'education-window');
    educationWindow.innerHTML = `
        <div class="window-content education-window-content">
            <p class="education-window-year">September, 2019 - March, 2023</p>
            <p>Electronics-Technician</p>
            <p>Gomel State Machine Building College</p>
        </div>
    `
    windowContainer.appendChild(educationWindow);
}

function createSkillsWindow() {
    skillsWindow.classList.add('general-window', 'skills-window');
    skillsWindow.innerHTML = `
        <div class="window-content skills-window-content">
            <h1>Frontend</h1>
            <ol>
                <li><p>HTML</p></li>
                <li><p>CSS</p></li>
                <li><p>JavaScript</p></li>
            </ol>
        </div>

        <div class="window-content skills-window-content">
            <h1>Backend</h1>
            <ol>
                <li><p>JAVA (frameworks: Spring)</p></li>
                <li><p>C++</p></li>
            </ol>
        </div>

        <div class="window-content skills-window-content">
            <h1>Other</h1>
            <ol>
                <li><p>Database</p></li>
                <li><p>GIT</p></li>
            </ol>
        </div>
    `
    windowContainer.appendChild(skillsWindow);
}

function removeGeneralWindow() {
    const generalWindow = document.querySelector('.general-window');
    if (generalWindow) {
        generalWindow.remove();
    }
}


windowsCloseButton.addEventListener("click", () => {
    removeGeneralWindow();

    windowContainer.classList.remove("active");
    navBarContainer.classList.remove("active");
});

workButton.addEventListener("click", () => {
    removeGeneralWindow();
    inWindowsText.textContent = `${workButtonText}`
    WindowBarText.textContent = `${workButtonText}`
    createWorkWindow();

    windowContainer.classList.add("active");
    navBarContainer.classList.add("active");
});

educationButton.addEventListener("click", () => {
    removeGeneralWindow();
    inWindowsText.textContent = `${educationButtonText}`
    WindowBarText.textContent = `${educationButtonText}`
    createEducationWindow();

    windowContainer.classList.add("active");
    navBarContainer.classList.add("active");
});

skillsButton.addEventListener("click", () => {
    removeGeneralWindow();
    inWindowsText.textContent = `${skillsButtonText}`
    WindowBarText.textContent = `${skillsButtonText}`
    createSkillsWindow();

    windowContainer.classList.add("active");
    navBarContainer.classList.add("active");
});



