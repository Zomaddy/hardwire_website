const buttons = document.querySelectorAll('#menu button');
const sections = document.querySelectorAll('#content > div');
const menu = document.getElementById('menu');
const photo_section = document.getElementById('photo_section');
const sectionButtons = document.querySelectorAll('#menu_sec button');
const sectionPages = [document.getElementById('hardware'), document.getElementById('programming'), document.getElementById('dj'), 
    document.getElementById('music_prod'), document.getElementById('podcast')];
const projectButtons = document.querySelectorAll('#menu_proj button');
const projectPages = [document.getElementById('electr_flute'), document.getElementById('synth'), document.getElementById('theremin'),
    document.getElementById('pianola')];

buttons.forEach((button,index) => {
    button.addEventListener('click', () => {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        menu.style.display = 'none';
        photo_section.style.display = 'none';
        sections[index].style.display = 'block';
        sections[index].style.width = '100%';
        sections[index].style.height = '100vh';
    });
});

sectionButtons.forEach((button,index) => {
    button.addEventListener('click', () => {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        sectionPages[index].style.display = 'block';
        sectionPages[index].style.display = '100%';
        sectionPages[index].style.display = '100vh';
    });
});

projectButtons.forEach((button,index) => {
    button.addEventListener('click', () => {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        projectPages[index].style.display = 'block';
        projectPages[index].style.display = '100%';
        projectPages[index].style.display = '100vh';
    });
});


