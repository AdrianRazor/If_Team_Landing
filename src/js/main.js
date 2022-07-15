import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "center center",
    end: "+=554px",
    // onEnter: () => console.log("Enter"),
    // onLeave: (panel) => console.log("Leave", panel.classList.add("active")),
    // onEnterBack: () => console.log("EnterBack"),
    // onLeaveBack: () => console.log("LeaveBack"),
    // endTrigger: ".end-trigger",
    pin: true,
    markers: true,
  });
});

document.addEventListener("DOMContentLoaded", function (event) {
  // Анимация блоков со скриншотами
  // При наведении на блок скриншоты "двигаются за мышью"
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

  console.log("DOM fully loaded and parsed");
});
