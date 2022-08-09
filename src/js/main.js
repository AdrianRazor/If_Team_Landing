import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Анимация бегущей строки
gsap.to(".marquee-left", {
  xPercent: -100,
  repeat: -1,
  duration: 15,
  ease: "linear",
});

gsap.from(".marquee-right", {
  xPercent: -100,
  repeat: -1,
  duration: 15,
  ease: "linear",
});

// Анимация стартового экрана
const timelineStart = gsap.timeline({ defaults: { ease: "power2.out" } });
timelineStart
  .from(".header__container", { y: -50, opacity: 0, duration: 1 })
  .from(".start__title", { y: 50, opacity: 0, duration: 1 }, "-=0.8")
  .from(".start__text", { y: 50, opacity: 0, duration: 1 }, "-=0.8")
  .from(".start__btn", { y: 30, opacity: 0, duration: 0.4 }, "-=0.8")
  .from(".start__mail", { y: 30, opacity: 0, duration: 0.4 }, "-=0.8") //удалить позже
  .from(".start__box", { x: 50, opacity: 0, duration: 1 }, "-=0.9")
  .from(".stripe", { y: 50, opacity: 0, duration: 1 }, "-=0.9");

// Анимация блока Fix
const timelineFixed = gsap.timeline({
  defaults: { ease: "power2.out" },
  scrollTrigger: {
    trigger: ".fix__block",
    start: "top 70%",
  },
});
timelineFixed
  .from(".fix__block", { y: 50, opacity: 0, duration: 1 })
  .from(".fix__title", { y: 50, opacity: 0, duration: 1 }, "-=0.8")
  .from(".fix__text", { y: 50, opacity: 0, duration: 1 }, "-=0.8")
  .from(".fix__box", { y: 50, opacity: 0, duration: 1 }, "-=0.8")
  .from(
    ".fix__thumb",
    {
      x: -10,
      y: -70,
      opacity: 0,
      rotate: -45,
      duration: 1.2,
      ease: "bounce.out",
    },
    "-=1.5"
  );

// Анимация блока Company
const timelineCompany = gsap.timeline({
  defaults: { duration: 1, opacity: 0, ease: "power2.out" },
  scrollTrigger: {
    trigger: ".company",
    start: "top 70%",
  },
});
const company = document.querySelector(".company");
const companyLogo = company.querySelector(".headline .headline__box");
const companyTitle = company.querySelector(".headline .title-2");
const companyText = company.querySelector(".headline__text");

timelineCompany
  .from(companyLogo, { y: 40 })
  .from(companyTitle, { y: 40 }, "-=0.8")
  .from(companyText, { y: 40 }, "-=0.8")
  .from(".company__block--left", { x: -40 }, "-=0.8")
  .from(".company__block--right", { x: 40 }, "-=0.8");

// Анимация блока Client
const timelineClient = gsap.timeline({
  defaults: { duration: 1, opacity: 0, ease: "power2.out" },
  scrollTrigger: {
    trigger: ".client",
    start: "top 70%",
  },
});
const client = document.querySelector(".client");
const clientLogo = client.querySelector(".headline .headline__box");
const clientTitle = client.querySelector(".headline .title-2");
const clientText = client.querySelector(".headline__text");

timelineClient
  .from(clientLogo, { y: 40 })
  .from(clientTitle, { y: 40 }, "-=0.8")
  .from(clientText, { y: 40 }, "-=0.8")
  .from(".client__item", { y: 40, stagger: 0.1 }, "-=0.8")
  .from(".client__box", { y: 40 }, "-=0.8");

// Анимация блока Project
const timelineProject = gsap.timeline({
  defaults: { duration: 1, opacity: 0, ease: "power2.out" },
  scrollTrigger: {
    trigger: ".project",
    start: "top 70%",
  },
});
const project = document.querySelector(".project");
const projectLogo = project.querySelector(".headline .headline__box");
const projectTitle = project.querySelector(".headline .title-2");
const projectText = project.querySelector(".headline__text");

timelineProject
  .from(".project__wrapper", { y: 40 })
  .from(projectLogo, { y: 40 }, "-=0.8")
  .from(projectTitle, { y: 40 }, "-=0.8")
  .from(projectText, { y: 40 }, "-=0.8")
  .from(".project__list", { y: 40 }, "-=0.8")
  .from(".project__img", { x: 50 }, "-=0.8");

// Анимация блока Task
const timelineTask = gsap.timeline({
  defaults: { duration: 1, opacity: 0, ease: "power2.out" },
  scrollTrigger: {
    trigger: ".task",
    start: "top 70%",
  },
});
const task = document.querySelector(".task");
const taskLogo = task.querySelector(".headline .headline__box");
const taskTitle = task.querySelector(".headline .title-2");
const taskText = task.querySelector(".headline__text");

timelineTask
  .from(taskLogo, { y: 40 }, "-=0.8")
  .from(taskTitle, { y: 40 }, "-=0.8")
  .from(taskText, { y: 40 }, "-=0.8")
  .from(".task__item", { y: 40, stagger: 0.2 }, "-=0.8");

// Анимация блока Finance
const timelineFinance = gsap.timeline({
  defaults: { duration: 1, opacity: 0, ease: "power2.out" },
  scrollTrigger: {
    trigger: ".finance",
    start: "top 70%",
  },
});
const finance = document.querySelector(".finance");
const financeLogo = finance.querySelector(".headline .headline__box");
const financeTitle = finance.querySelector(".headline .title-2");
const financeText = finance.querySelector(".headline__text");

timelineFinance
  .from(financeLogo, { y: 40 }, "-=0.8")
  .from(financeTitle, { y: 40 }, "-=0.8")
  .from(financeText, { y: 40 }, "-=0.8");

// Анимация наложения блоков в секции Finance
gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "center center",
    end: "+=554px",
    onLeave: () => panel.classList.add("active"),
    onEnterBack: () => panel.classList.remove("active"),
    pin: true,
  });
});

// Анимация блока Begin
const timelineBegin = gsap.timeline({
  defaults: { duration: 1, opacity: 0, ease: "power2.out" },
  scrollTrigger: {
    trigger: ".begin",
    start: "top 70%",
  },
});
timelineBegin
  .from(".begin", { y: 40, stagger: 0.2 }, "-=0.8")
  .from(".ticker", { y: 40, stagger: 0.2 }, "-=0.8");

// Анимация блока Footer
const timelineFooter = gsap.timeline({
  defaults: { duration: 1, opacity: 0, ease: "power2.out" },
  scrollTrigger: {
    trigger: ".footer",
    start: "top 70%",
  },
});
timelineFooter
  .from(".footer__wrapper", { y: 40 }, "-=0.8")
  .from(".footer__title", { y: 40 }, "-=0.8")
  .from(".footer__box", { y: 40 }, "-=0.8")
  .from(".footer__buttons", { y: 40 }, "-=0.8")
  .from(".footer__rights", { y: 40 }, "-=0.8")
  .from(
    ".footer__heart",
    {
      scale: 0,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0,0 0.003,0.136 0.01,0.226 0.029,0.48 0.04,1.224 0.11,1.224 0.162,1.224 0.122,0.966 0.184,0.966 0.23,0.966 0.212,1.2 0.272,1.2 0.314,1.2 0.288,0.97 0.368,0.97 0.408,0.97 0.483,0.961 0.536,0.976 0.572,0.986 0.574,1.218 0.624,1.218 0.67,1.218 0.64,0.972 0.698,0.972 0.742,0.972 0.734,1.2 0.78,1.2 0.811,1.2 0.794,1 0.858,1 0.888,1 1,1 1,1 "
      ),
      duration: 2,
    },
    "-=0.8"
  );

// // Анимация блоков со скриншотами
// // При наведении на блок скриншоты "двигаются за мышью"
const startContainer = document.querySelector(".start");
const fixContainer = document.querySelector(".fix");
const clientContainer = document.querySelector(".client");

if (startContainer) {
  startContainer.addEventListener("mousemove", moving);
}

if (fixContainer) {
  fixContainer.addEventListener("mousemove", moving);
}

if (clientContainer) {
  clientContainer.addEventListener("mousemove", moving);
}

function moving(e) {
  document.querySelectorAll(".move").forEach(function (move) {
    let movingValue = move.getAttribute("data-value");
    let x = (e.clientX * movingValue) / 250;
    let y = (e.clientY * movingValue) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
