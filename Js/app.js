"use strict";
const NavbarMenu = document.querySelector('#navbar_menu')
const Menu = document.querySelector('#menu')

NavbarMenu.addEventListener('click',()=>{
    Menu.classList.toggle("block")
})