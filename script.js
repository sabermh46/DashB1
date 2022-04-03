var menuBtn = document.querySelectorAll('.menu-body > .btn');
var menuSub = document.querySelectorAll('.menu-body > .sub-btn');

menuBtn.forEach((btn, i) => {
    const sub = menuSub[i];
    btn.addEventListener('click', ()=> {
        sub.classList.toggle('active');
    })
})