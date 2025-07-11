const usernameInput = document.getElementById("username");

username.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        const username = usernameInput.value.trim();

        localStorage.setItem('username', username);
        window.location.href = 'index.html';
    }
});

