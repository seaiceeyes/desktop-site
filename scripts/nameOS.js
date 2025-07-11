document.addEventListener('DOMContentLoaded', () => {
    const usernameLocal = localStorage.getItem('username');

    if(usernameLocal){
        const nameClass = document.querySelector('.user-information-text');
        nameClass.textContent = `${usernameLocal} OS`;
    } else {
        window.location.href = `login.html`;
    }
});

