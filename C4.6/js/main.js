const prev_b = document.querySelector('.prev_b');
const next_b = document.querySelector('.next_b');
let images = document.querySelectorAll('.image-sliders img');

let i = 0;

next_b.addEventListener('click', function() {
    images[i].className = "";
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = "show";
});

prev_b.addEventListener('click', function() {
    images[i].className = "";
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].className = "show";
});