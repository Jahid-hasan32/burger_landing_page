// navbar. -> menu links  
const menu_bar_icon = document.getElementById("menu_bar_icon")
const menu_links_show = document.getElementById("menu_links_show")
const cros_icon = document.getElementById("cros_icon")

const nav_link = document.querySelectorAll("#nav_link")

menu_bar_icon.addEventListener('click', function(){

    menu_links_show.classList.remove('hidden')
})

cros_icon.addEventListener('click', function(){
    menu_links_show.classList.add('hidden')
})

nav_link.forEach(link => 
    link.addEventListener('click', function(){
        menu_links_show.classList.add('hidden')
    })
);


// menu showcase
const menu_active_btn = document.querySelectorAll('#menu_active_btn')
const all = document.querySelectorAll(".menu_showcase_item")
const foods = document.querySelector(".food")
const snacks = document.querySelector(".snack")
const beverages = document.querySelector(".beverage")


menu_active_btn.forEach(tab => {
    //  menu button 
    tab.addEventListener('click', ()=> {
        menu_active_btn.forEach(tab => {
            tab.classList.remove("menu_active")
        })

        tab.classList.add("menu_active")
        
        // menu showcase card

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabval == 'food'){
            foods.style.display = 'block'
        }
        else if (tabval == 'snack'){
            foods.style.display = 'block'
        }
        else if (tabval == 'beverage'){
            foods.style.display = 'block'
        }
        else {
            foods.style.display = 'block'
        }
        
    })
});

// // swiper js

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
//     speed: 400,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction : false
//   },
//     // Responsive breakpoints
//     breakpoints: {
//         // when window width is >= 640px
//         640: {
//           slidesPerView: 1,
//         },
//         // when window width is >= 786px
//         786: {
//           slidesPerView: 2,
//         },
//         // when window width is >= 1024px
//         1024: {
//           slidesPerView: 3,
//         }
//       },
//     // If we need pagination
//     gapCursor : true, 
//     pagination: {
//       el: '.swiper-pagination',
//       clickable : true,
//     },

//   });