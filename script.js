let fechar = document.getElementsByClassName("header-menu-fechar")[0]
let abrir = document.getElementsByClassName("header-menu")[0]
let menu = document.getElementsByClassName("nav-bar_mobile")[0]
let scroll = document.getElementsByClassName("no-scroll")[0]

abrir.addEventListener("click",() => {
    menu.style.display="flex"
    scroll.style.overflow="hidden"
})
fechar.addEventListener("click",() => {
    menu.style.display="none"
    scroll.style.overflow="scroll"
})