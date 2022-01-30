let allTag = document.getElementById('allTag');
let cppTag = document.getElementById('cppTag');
let webDevTag = document.getElementById('webDevTag');
let _3dGraphicsTag = document.getElementById('3dGraphicsTag');
let projectCards = document.getElementsByClassName('projectCard');

allTag.addEventListener('click', () => {
    for (let i = 0; i < projectCards.length; i++) {
        projectCards[i].classList.remove('d-none');
    }
});

cppTag.addEventListener('click', () => {
    for (let i = 0; i < projectCards.length; i++) {
        if (projectCards[i].getAttribute('projectType') != 'c++') {
            projectCards[i].classList.add('d-none');
        } else {
            projectCards[i].classList.remove('d-none');
        }
    }
});
webDevTag.addEventListener('click', () => {
    for (let i = 0; i < projectCards.length; i++) {
        if (projectCards[i].getAttribute('projectType') != 'web-dev') {
            projectCards[i].classList.add('d-none');
        } else {
            projectCards[i].classList.remove('d-none');
        }
    }
});
_3dGraphicsTag.addEventListener('click', () => {
    for (let i = 0; i < projectCards.length; i++) {
        if (projectCards[i].getAttribute('projectType') != '3D-graphics') {
            projectCards[i].classList.add('d-none');
        } else {
            projectCards[i].classList.remove('d-none');
        }
    }
});