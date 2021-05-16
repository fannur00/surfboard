const humburger = document.querySelector('#humburger');
const fullMenu = document.querySelector('.fullscrean-menu');
const fullMenuClose = document.querySelector('.fullscrean-menu__close');
const body = document.body;

humburger.addEventListener('click', e => {
    fullMenu.classList.add('active')
    body.classList.add('body-wrapper')

    fullMenuClose.addEventListener('click', e => {
        fullMenu.classList.remove('active')
        body.classList.remove('body-wrapper')
    });

});