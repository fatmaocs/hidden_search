let search_input = document.getElementById('search');
let search_button = document.getElementById("search_icon");
let search_box = document.querySelector('.search_box');


search_button.addEventListener('click', () => {

    search_box.classList.toggle('active');
    search_input.focus();
});