const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items')

const rotate45Deg = () => {
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active')
}

hamburger.addEventListener('click', () => {
    rotate45Deg();
});


const navOptions = document.querySelectorAll('.nav-items li a');

const closeHamb = () => {
    hamburger.classList.remove('active');
    navItems.classList.remove('active');
}

navOptions.forEach((ele) => {
    navItems.addEventListener('click', () => {
        setTimeout(() => {
            closeHamb();
        }, 1000)
    });
})

