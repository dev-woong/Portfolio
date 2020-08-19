"use strict"

// selector 위치로 srolling
const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({ behavior: "smooth" })
}

// navbar 버튼 클릭 시 scrolling
const navbarMenu = document.querySelector(".navbar__menu")
navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link
  if (link === null || link === undefined) {
    return
  }
  scrollIntoView(link)
})

//navbar toggle 버튼 클릭
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn")
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open")
})

// home의 contact 버튼 클릭 시 scrolling
const homeContactBtn = document.querySelector(".home__contact")
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact")
})

//scroll 위치에 따라 animation 효과 적용
const home = document.querySelector("#home"),
  navbar = document.querySelector("#navbar"),
  homeHeight = home.getBoundingClientRect().height,
  aboutHeader = document.querySelector(".about__header"),
  aboutHeaderTop = aboutHeader.offsetTop,
  aboutMajor = document.querySelector(".about__majors"),
  aboutMajorTop = aboutMajor.offsetTop,
  aboutMeDescription = document.querySelector(".me__description"),
  aboutMeDescriptionTop = aboutMeDescription.offsetTop,
  aboutMeSkill = document.querySelector(".me__skill"),
  projectHeader = document.querySelector(".project__header"),
  projectHeaderTop = projectHeader.offsetTop,
  projectMajors = document.querySelector(".project__majors"),
  projectMajorsTop = projectMajors.offsetTop,
  contactHeader = document.querySelector(".contact__header"),
  contactHeaderTop = contactHeader.offsetTop,
  contactInfo = document.querySelector(".contact__info")

document.addEventListener("scroll", () => {
  console.log(window.scrollY)
  if (window.scrollY > homeHeight) {
    navbar.classList.add("navbar--dark")
  } else {
    navbar.classList.remove("navbar--dark")
  }

  if (window.scrollY > aboutHeaderTop - homeHeight / 2) {
    aboutHeader.classList.add("about__header--dark")
  }

  if (window.scrollY > aboutMajorTop - homeHeight / 2) {
    aboutMajor.classList.add("about__majors--dark")
  }

  if (window.scrollY > aboutMeDescriptionTop - homeHeight / 2) {
    aboutMeDescription.classList.add("me__description--dark")
    aboutMeSkill.classList.add("me__skill--dark")
  }

  if (window.scrollY > projectHeaderTop - homeHeight / 2) {
    projectHeader.classList.add("project__header--dark")
  }

  if (window.scrollY > projectMajorsTop - homeHeight / 2) {
    projectMajors.classList.add("project__majors--dark")
  }

  if (window.scrollY > contactHeaderTop - (homeHeight * 3) / 4) {
    contactHeader.classList.add("contact__header--dark")
    contactInfo.classList.add("contact__info--dark")
  }
})

// scrolling을 아래로 내리면 arrow up 버튼을 나타나게 함
const arrowUp = document.querySelector(".arrow-up")
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible")
  } else {
    arrowUp.classList.remove("visible")
  }
})

// arrow up  버튼 클릭 시 scrolling
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home")
})

//test git test
