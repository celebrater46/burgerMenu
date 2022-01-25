"use strict";

function burger() {
    document.getElementById('nav').classList.toggle('in');
}

document.getElementById('burger').addEventListener('click' , function () {
    burger();
});

document.getElementById('navi_close').addEventListener('click' , function () {
    burger();
});