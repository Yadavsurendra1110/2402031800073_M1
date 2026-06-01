let watchButton = document.querySelector('.watch-btn');

watchButton.addEventListener('click', function(){

    alert('Trailer will play soon!');

});


// ================= NAVBAR BACKGROUND CHANGE =================

window.addEventListener('scroll', function(){

    let navbar = document.querySelector('.navbar');

    if(window.scrollY > 50)
    {
        navbar.style.background = 'black';
    }
    else
    {
        navbar.style.background = 'rgba(0,0,0,0.4)';
    }

});


let hero = document.querySelector('.hero');

let progress = document.querySelectorAll('.progress');

let pauseBtn = document.getElementById('pauseBtn');

let pauseIcon = document.getElementById('pauseIcon');


// IMAGES

let images = [

    "url('d:\GtaV.jpg')",

    "url('https://images6.alphacoders.com/909/909641.jpg')",

    "url('https://wallpapercave.com/wp/wp3882107.jpg')"

];


// START IMAGE

let current = 0;

