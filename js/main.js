window.addEventListener('load', () => {

    const menuBtn = document.querySelector('.header-btn_media')

    const menu = document.getElementById('menu');

    const showMenu = () => {
        menu.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll')
    }

    menuBtn.addEventListener('click', showMenu)



    //shadow for header
    let header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            header.classList.add('shadow')
        } else if (window.scrollY < 50){
            header.classList.remove('shadow')
        }
    })


    // animated move-left

    const postRight = document.querySelector('.post-right')

    const postRightRect = postRight.getBoundingClientRect()
    console.dir(postRightRect.y)
    console.dir(postRight)

    const valHeight = postRightRect.y-postRight.clientHeight-400

    window.addEventListener('scroll', () => {
        if(window.scrollY > valHeight){
            postRight.classList.add('post-right__animated')
        }
    })
})