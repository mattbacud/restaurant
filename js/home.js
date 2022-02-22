// Nav Container Phone
const nav = document.querySelector('.nav-container');
const ham = document.querySelector('.hamburger-container');

ham.addEventListener('click', function(e){
    if(!nav.classList.contains('show')){
        nav.style.display = 'block'
        nav.classList.add('show');
    }
    else{
        nav.style.display = 'none'
        nav.classList.remove('show');
    }
})



const menuSmooth = document.querySelector('.menu-category-section')
const menuToFixed = document.querySelector('.menu-text-order');
const browseMenu = document.querySelector('.button-browse-more');

const sticky = menuToFixed.offsetTop;



window.onscroll = function(){ stickyElement() }

function stickyElement(){
    const logoContainer = document.querySelector('.logo-container');
    if(window.scrollY >= sticky + 10){
        menuToFixed.classList.add('sticky');
        menuSmooth.style.marginTop = "50px"

        if(window.scrollY > browseMenu.offsetTop-100){
            menuToFixed.classList.remove('sticky');
            menuSmooth.style.marginTop = "0"
        }
    }
    else{
        menuToFixed.classList.remove('sticky');
        menuSmooth.style.marginTop = "0"
    }


    // if(window.scrollY > 80){
    //     logoContainer.style.position='fixed'
    //     logoContainer.style.bottom='60'
    //     logoContainer.style.right='27%'
    // }
    // else{
    //     logoContainer.style.position='relative'
    //     logoContainer.style.bottom='0'
    //     logoContainer.style.right='0'
    // }
    
    // console.log(`${browseMenu.offsetTop}----${window.scrollY}`)
}
