const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.menu');
burgerEl.addEventListener('click', function () {
    burgerEl.classList.toggle('active');
    menuEl.classList.toggle('active');
});


const menuLink = document.querySelector('.menu');
menuLink.addEventListener('click', function () {
    menuLink.classList.toggle('active');
    burgerEl.classList.toggle('active');
});


const btns = document.querySelectorAll('.info__btn');
for (info__btn of btns) {
    info__btn.addEventListener('click', function () {
        const infoEl = this.closest('.info');
        const dotsEl = infoEl.querySelector('.text__dots');
        const moreEl = infoEl.querySelector('.text__more');
        if (dotsEl.style.display === 'none') {
            dotsEl.style.display = 'inline';
            moreEl.style.display = 'none';
            this.textContent = 'Continue Reading →';
        } else {
            dotsEl.style.display = 'none';
            moreEl.style.display = 'inline';
            this.textContent = '← Hide text';
        }
    });
}


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        const blockID = e.target.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}