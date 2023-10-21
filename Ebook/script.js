const navContainer = document.querySelector('.navItems');
// console.log(navContainer)
const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const cartCon = document.querySelector('header .navItems a.shopping-cart i img')
// console.log(cartCon)
// console.log(menuBtn)
menuBtn.addEventListener('click',()=>{
    navContainer.classList.add('active')
    navContainer.style.display = 'flex'
    navContainer.style.right = '0';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block'
    cartCon.src = 'Assets/Images/cart-icon-black-1.png';
})


closeBtn.addEventListener('click',()=>{
    navContainer.classList.remove('active');
    navContainer.style.right = '-100%';
    // 👇 this was actually causing it to not animate back to '0'
    // navContainer.style.display = 'none'; 
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'block';
    cartCon.src = 'Assets/Images/cart-svg.svg';

})