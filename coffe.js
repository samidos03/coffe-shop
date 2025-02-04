const ferme = document.querySelector('.close');
const navlink = document.querySelector('nav ul');
const menutoggle = document.querySelector('.NAVBAR');
const links= document.querySelectorAll('nav ul li a');

menutoggle.addEventListener('click', () => {
    navlink.classList.toggle('open'); 
    ferme.classList.toggle('open');
    menutoggle.classList.toggle('hidden'); 
});

ferme.addEventListener('click', () => {
    navlink.classList.remove('open'); 
    ferme.classList.remove('open'); 
    menutoggle.classList.remove('hidden'); 
});

links.forEach(link => { 
    link.addEventListener('click', () => {
        navlink.classList.remove('open');
        ferme.classList.remove('open');
        menutoggle.classList.remove('hidden');
    });
});