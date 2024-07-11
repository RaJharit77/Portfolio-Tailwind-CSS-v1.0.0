window.onload = () => {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    button.addEventListener('click', () => {
        menu.classList.toggle('slide-in-left');
        menu.classList.toggle('slide-out-left');
    });
};

window.onload = () => {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
};
