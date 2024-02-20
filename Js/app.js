"use strict";
const NavbarMenu = document.querySelector('#navbar_menu')
const Menu = document.querySelector('#menu')

NavbarMenu.addEventListener('click',()=>{
    Menu.classList.toggle("block")
})

// Bu yerda yilni chiqaruvchi paragraph chaqirildi!
const year = document.querySelector('#year')

const data = new Date().getFullYear()
year.innerHTML = data;