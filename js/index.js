const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.nav');

const navItems = document.querySelectorAll('.nav__item');

toggleButton.addEventListener ('click', () => {
    menu.classList.toggle('nav--active');
})

console.log(navItems);
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navItems.forEach((item) => {item.classList.remove('nav__item--active')})
        item.classList.add('nav__item--active');
        item.children[1].classList.toggle('nav__sublist--active');
    })
})