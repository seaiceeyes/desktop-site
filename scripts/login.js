const usernameInput = document.getElementById("username");

const textClass = document.querySelector('.login-welcome-text');
const containerClass = document.querySelector('.login-form');
const welcomeClass = document.querySelector('.login-welcome');


welcomePage = () => {
        containerClass.style.visibility = 'hidden';
        welcomeClass.style.visibility = 'visible';
};

username.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        const username = usernameInput.value.trim();

        localStorage.setItem('username', username);
        textClass.textContent = `${username}`;

        welcomePage();

        setTimeout(() => {
            window.location.href = 'index.html'; 
            containerClass.style.visibility = 'visible';
            welcomeClass.style.visibility = 'hidden';
        }, 3000);

    }
});


