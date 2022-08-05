window.addEventListener('load', () => {

    const menuBtn = document.querySelector('.header-btn_media')

    const menu = document.getElementById('menu');

    const showMenu = () => {
        menu.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll')
    }

    menuBtn.addEventListener('click', showMenu)

})