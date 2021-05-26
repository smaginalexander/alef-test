const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.burger__menu')
const like = document.querySelectorAll('.card__like')
const upButton = document.querySelector('.content__up')
const popup = document.querySelector('.popup')
burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active')
    menu.classList.toggle('burger__menu_active')
})

like.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle('card__like_active')
        if (item.classList.contains('card__like_active')) {
            popup.classList.add('popup_active')
        }
    })
})

popup.addEventListener('click', () => {
    popup.classList.remove('popup_active')
})

upButton.addEventListener("click", () => {
    document.querySelector('.header').scrollIntoView({ block: "center", behavior: "smooth" })
})

