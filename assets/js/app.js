const scrollUp = document.querySelector('#scroll-up')       // you can get the same result when using getElementById instead.
const checkbox = document.querySelector('#checkbox')
const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector('ul')
const navLink =document.querySelectorAll('#nav-link')
navLink.forEach((n) => n.addEventListener('click', closeMenu))
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})
checkbox.addEventListener('change',() => {
    //Toggle website theme
    document.body.classList.toggle("dark")
})

function openMenu() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle('active')
}
function closeMenu() {
    hamburger.classList.remove("active")
    navMenu.classList.remove('active')
}