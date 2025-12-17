const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('#content > div');
const menu = document.getElementById('menu');
const photo_section = document.getElementById('photo_section');


buttons.forEach((button,index) => {
    button.addEventListener('click', () => {
        sections.forEach(section => {
            section.style.display = 'none';
        })
        menu.style.display = 'none';
        photo_section.style.display = 'none';
        sections[index].style.display = 'block';
        sections[index].style.width = '100%';
        sections[index].style.height = '100vh';
    }) 
})
