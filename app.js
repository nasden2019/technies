const nav = document.querySelector('.navbar');

window.onscroll = () => {
    if (document.documentElement.scrollTop >= 200) {
        nav.classList.add('navBg')
    } else {
        nav.classList.remove('navBg')
    }
}



const btns = document.querySelectorAll('button');
const minus = document.querySelectorAll('.minus-icon')
const plus = document.querySelectorAll('.plus-icon')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const texts = e.currentTarget.parentElement;
        texts.classList.toggle('contenti');
        minus.style.display = "block"
    })
})