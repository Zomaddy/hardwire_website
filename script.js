const buttons = document.querySelectorAll('#menu button');
const sections = document.querySelectorAll('#content > div');
const menu = document.getElementById('menu');
const photo_section = document.getElementById('photo_section');
const views = document.querySelectorAll('#content > div');

function showView(id){
    views.forEach(v => v.style.display = 'none');

    if (id === 'home') {
        menu.style.display = 'flex';
        photo_section.style.display = 'block';
    } else {
        menu.style.display = 'none';
        photo_section.style.display = 'none';

        const element = document.getElementById(id);
        if (element) element.style.display = 'block';

        const img = element.querySelector('img');
            if (img) img.src = img.src;
    }
}

    const map = {
    "O NAS": "about_us",
    "SEKCJE": "sections",
    "PROJEKTY": "projects",
    "GALERIA": "gallery",
    "ENGLISH": "english"
};

document.querySelectorAll('#menu button').forEach(button => {
    button.addEventListener('click', () => {
        const view = map[button.textContent.trim()];
        history.pushState({view}, '', `#${view}`);
        showView(view);
    });
});

    window.addEventListener('popstate', e => {
        if (e.state && e.state.view) {
            showView(e.state.view);
        } else {
            showView('home');
        }
    });


const sectionMap = {
    "BUDOWA SPRZĘTU": "hardware",
    "PROGRAMOWANIE": "programming",
    "SEKCJA DJ-SKA": "dj",
    "SEKCJA PRODUCENCKA": "music_prod",
    "PODCAST": "podcast"
};

document.querySelectorAll('#menu_sec button').forEach(button => {
    button.addEventListener('click', () => {
        showView(sectionMap[button.textContent.trim()]);
    });
});

const projectMap = {
    "ELEKTRONICZNY FLET": "electr_flute",
    "SYNTEZATOR MODULARNY": "synth",
    "THEREMIN": "theremin",
    "PIANOLA": "pianola"
};

document.querySelectorAll('#menu_proj button').forEach(button => {
    button.addEventListener('click', () => {
        showView(projectMap[button.textContent.trim()]);
    });
});

showView('home');


