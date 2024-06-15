/*~~~~~~~~~~~~~~~ HAMBURGER MENU ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById('hamburger')
const hamburgerClose = document.getElementById('hamburger-close')
const navMenu = document.getElementById('nav-menu')
let navLink = document.querySelectorAll('.nav-link')

// NAV CLOSE WHEN CLICKING LINK
navLink.forEach((link) =>{
  link.addEventListener('click',function () {
    navMenu.classList.add('hidden') 
    hamburgerClose.classList.add('hidden')
  hamburger.classList.remove('hidden')
  })
})

hamburger.addEventListener('click', () => {
  hamburger.classList.add('hidden')
  navMenu.classList.remove('hidden')
  hamburgerClose.classList.remove('hidden')

});
hamburgerClose.addEventListener('click', () => {
  hamburger.classList.remove('hidden')
  navMenu.classList.add('hidden')
  hamburgerClose.classList.add('hidden')
  
});
/*~~~~~~~~~~~~~~~ DARK / MODE ~~~~~~~~~~~~~~~*/
// darkmode
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  setTheme('dark');
} else {
  setTheme('light');
}

sunIcon.addEventListener('click', () => {
  localStorage.theme = 'dark';
  setTheme('dark');
});

moonIcon.addEventListener('click', () => {
  localStorage.theme = 'light';
  setTheme('light'); 
});




/*~~~~~~~~~~~~~~~ NAV ON SCROLL STYLE + BACK TO TOP ~~~~~~~~~~~~~~~*/
const nav = document.getElementById('navbar')
const toTop=document.getElementById('top')
const navFixed = nav.offsetTop
window.onscroll = function () {
    if( window.scrollY > navFixed){
        nav.classList.add('nav-fixed')
        toTop.classList.add('block')
        toTop.classList.remove('hidden')
    }
    else {
  nav.classList.remove('nav-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('block')
    }
  
}

/*~~~~~~~~~~~~~~~ MOVING ACTIVE LINK / SCROLL ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll('section')
  const navLink = document.querySelectorAll('.nav-link') 
  let setLink = 'home'

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (this.scrollY >= sectionTop -55 ) {
      setLink=section.getAttribute('id')
    }
  })
  navLink.forEach((item) => {
    item.classList.remove('text-secondaryColor')
    if (item.href.includes(setLink)) {
    item.classList.add('text-secondaryColor')
    }
})
}

window.addEventListener('scroll', activeLink)
/*~~~~~~~~~~~~~~~ REVEAL ANIMATION / SCROLL ~~~~~~~~~~~~~~~*/

window.sr = ScrollReveal({
  reset: true,
  duration: 1000,
  distance: '40px',
  origin:'top'
});
sr.reveal(".home-image")
sr.reveal(".home-content",  { origin: "right" })
sr.reveal(".category-1",  { origin: "left" })
sr.reveal(".category-2")
sr.reveal(".category-3",  { origin: "right"});
sr.reveal(".promo")
sr.reveal(".about-image")
sr.reveal(".about-content",  { origin: "right" })
sr.reveal(".menu-tittle")
sr.reveal(".review", { origin: 'top' })
sr.reveal(".review-tittle")

/*~~~~~~~~~~~~~~~ TABS selector ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll('.tab-wrapper ul li')
const all = document.querySelectorAll('.item-wrapper')
const burgers = document.querySelectorAll('.burgers')
const beverages = document.querySelectorAll('.beverages')
const snacks = document.querySelectorAll('.snacks')

tabs.forEach(tab => {
  tab.addEventListener('click', ()=>{
    tabs.forEach(tab => {
   tab.classList.remove('active')
    })
    tab.classList.add('active')

     const tabItem = tab.getAttribute('data-tabs')
 all.forEach(item => {
   item.style.display = 'none'
 })
    
    

    if  (tabItem == "burgers") {
    burgers.forEach(item => {
    item.style.display='block'
    })  
    }

   else if (tabItem == "beverages") {
          beverages.forEach(item => {
            item.style.display = 'block'
  })
    }
      else if (tabItem == "snacks") {
          snacks.forEach(item => {
    item.style.display='block'
  })
    }
    else (all.forEach(item => {
      item.style.display = 'block'
    }))
    
  })
})



// swiper review
const swiperReview = new Swiper('.swiper', {
            loop: true,
            speed: 400,
            spaceBetween: 30,
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction:false,
            },
            grabCursor: true,
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 2,
                }
  }
            
});
       
