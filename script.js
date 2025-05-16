function textChanger() {
  const changeText = document.querySelector("#change h3");
  const texts = [
    "Company Startup",
    "Tax Registration",
    "FSSAI License",
    "Intellectual Property",
    "MSME Registration",
  ];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % texts.length;
    changeText.textContent = texts[index];
  }, 2000);
}
textChanger();
// function Counter() {
//   const counters = [
//     { id: "client-counter", target: 324 },
//     { id: "staff-counter", target: 80 },
//     { id: "rating-counter", target: 4.5, isDecimal: true },
//     { id: "return-counter", target: 100000 },
//   ];

//   function animateCounter({ id, target, isDecimal }) {
//     const element = document.getElementById(id);
//     let count = 0;
//     const steps = 100;
//     const duration = 2000;
//     const interval = duration / steps;
//     const increment = target / steps;

//     const update = () => {
//       count += increment;
//       if (count >= target) count = target;

//       if (isDecimal) {
//         element.textContent = count.toFixed(1);
//       } else {
//         element.textContent = Math.floor(count).toLocaleString();
//       }

//       if (count < target) {
//         setTimeout(update, interval);
//       }
//     };

//     update();
//   }

//   window.addEventListener("load", () => {
//     counters.forEach((counter) => animateCounter(counter));
//   });
// }

// Counter();
function Counter() {
  const counters = [
    { id: "client-counter", target: 324 },
    { id: "staff-counter", target: 80 },
    { id: "rating-counter", target: 4.5, isDecimal: true },
    { id: "return-counter", target: 100000 },
  ];

  function animateCounter({ id, target, isDecimal }) {
    const element = document.getElementById(id);
    let count = 0;
    const steps = 100;
    const duration = 2000;
    const interval = duration / steps;
    const increment = target / steps;

    const update = () => {
      count += increment;
      if (count >= target) count = target;

      element.textContent = isDecimal
        ? count.toFixed(1)
        : Math.floor(count).toLocaleString();

      if (count < target) setTimeout(update, interval);
    };

    update();
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: "#page4", // wrap your counters in this section
    start: "top 80%",
    once: true,
    onEnter: () => {
      counters.forEach((counter) => animateCounter(counter));
    },
  });
}
Counter();
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
