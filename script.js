const nav = document.querySelector(".nav");
const $html = document.querySelector("html");
const $checkbox = document.querySelector("#chk");

window.addEventListener("scroll", function () {
    nav.classList.toggle("sticky", window.scrollY > 120)
});

let isAnimating = true


const navbar = document.querySelector(".navbar");
const btnMenu = document.querySelector('.btn-menu');


function toggleAnimation() {
    navbar.classList.toggle("active")
}


$checkbox.addEventListener("change", function () {
    $html.classList.toggle("light-mode")
})

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

