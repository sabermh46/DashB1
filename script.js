var menuBtn = document.querySelectorAll('.menu-body > .btn');
var menuSub = document.querySelectorAll('.menu-body > .sub-btn');
var btnIcon = document.createElement("i");
btnIcon.className = 'fa-solid fa-angle-right';
menuBtn.forEach((btn, i) => {
    btn.appendChild(btnIcon);
    const sub = menuSub[i];
    btn.addEventListener('click', ()=> {
        sub.classList.toggle('active');
    })
})