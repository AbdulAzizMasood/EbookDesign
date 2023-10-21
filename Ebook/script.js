const navContainer = document.querySelector('.navItems');
console.log(navContainer)
const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const cartCon = document.querySelector('header .navItems a.shopping-cart i img')
console.log(cartCon)
console.log(menuBtn)
menuBtn.addEventListener('click',()=>{
    navContainer.style.display = 'flex'
    navContainer.style.right = '0%'
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block'
    cartCon.src = 'Assets/Images/cart-icon-black-1.png';
})


closeBtn.addEventListener('click',()=>{
    navContainer.style.right = '-100%'
    navContainer.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none'
    cartCon.src = 'Assets/Images/cart-svg.svg';

})