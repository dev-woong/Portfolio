"use strict"

const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({ behavior: "smooth" })
}

const navbarMenu = document.querySelector(".navbar__menu")
navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link
  if (link === null || link === undefined) {
    return
  }
  scrollIntoView(link)
})

const homeContactBtn = document.querySelector(".home__contact")
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact")
})
