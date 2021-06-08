const images = document.querySelector('.img-cont')
const img = document.querySelectorAll('.img-cont img')

let currentImg = 0

function slider() {
  currentImg++

  if (currentImg > img.length - 1) {
    currentImg = 0
  }
  images.style.transform = `translateX(${-currentImg * 400}px)`
}
setInterval(slider, 2000)

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-item ')
const header = document.querySelector('.header')

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show')
})
