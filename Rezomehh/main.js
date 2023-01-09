// ------------ NAv haddien menu-------

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav__close');

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//show/hide nav menu 

const menu = document.querySelector(".nav__list");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const image = document.querySelector(".image");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
    image.style.position = "inherit";
    

})

//close nav menu 

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


// ------------- SHOW MENU ---------------   

// if (navToggle) {
//     navToggle.addEventListener('click' , () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// //------------- MENU HIDDEN ---------------

// if (navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })

// }

// //----------- REMOVE MENU MOBAILE --------

// const navlink = document.querySelectorAll('nav__link')
// function linkAction() {
//     const navMenu = document.getElementById('nav-menu')

//     navMenu.classList.remove('show-menu')
// }

// navlink.forEach(n => n.addEventListener('click' , linkAction))

//---------------- ACCORDION SKILLS ------------

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')


 function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'}
 }     

 skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
 })


 //------------------- QUALIFICATION TABS ----------------------------------------


 const tabs = document.querySelectorAll('[data-target]');
 const tabContents = document.querySelectorAll('[data-content]');

 tabs.forEach(tab =>{
    tab.addEventListener( 'click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})       


//---------------- PORTFOLIO SWIOER ----------------------------------------------

let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  
//   ================= SCROLL SECTIONS ACTIVE LINK =================

const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

// ====================== CHANGE BACKGROUND HEADER ======================

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollHeader)

// ====================== SHOW SCROLL UP =========================

function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)

// ====================== DARK LIGHT THEME =====================

// const themeButton = document.getElementById("theme-button")
// const darkTheme ='dark-theme'
// const iconTheme = 'uil-sun'
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

// ======================= =======================================

