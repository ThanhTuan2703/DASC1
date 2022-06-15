const buytBtns = document.querySelector('.js-mua')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-auth-form')
const modalClose = document.querySelector('.js-auth-form__switch-btn')

function showticket() {
    modal.classList.add('active')
}

function hideticket() {
    modal.classList.remove('active')

}
buytBtns.addEventListener('click', showticket)
    // for (const buyt of buytBtns) {

// }

function hideticket() {
    modal.classList.remove('active')

}
modalClose.addEventListener('click', hideticket)
modal.addEventListener('click', hideticket)
modalClose.addEventListener('click', function(event) {
    event.stopPropagation()
})