const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none'); 
        window.location.href = 'home.html';
    }, 3000); // Change the delay to 3000 milliseconds (3 seconds) for the splash screen
});