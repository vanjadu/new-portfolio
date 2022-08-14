console.clear()

const navbar = document.querySelector('.navbar')
const burger = document.querySelector('.navbar__burger')
const heroSocials = document.querySelector('.hero__socials')
const alterNav = document.querySelector('.alter')

window.addEventListener('scroll', () => {
  heroSocials.classList.toggle('scrolled', window.scrollY > 0)
})

window.addEventListener('scroll', () => {
  navbar.classList.toggle('sticky', window.scrollY > 0)
})

burger.addEventListener('click', function () {
  this.classList.toggle('active')
  alterNav.classList.toggle('open')
})
