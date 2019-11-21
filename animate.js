// -=-=-=-=-=-=-=-=-=-=
// ==== To start my functions in my js ====
// -=-=-=-=-=-=-=-=-=-=

document.addEventListener("DOMContentLoaded", function () {
  gsap.from("#titleT", {
    duration: 5,
    x: 700,
    y: -255,
    delay: .5,
    ease: "back",



  });

  gsap.from("#titleH2", {
    duration: 3,
    x: -800,
    y: 0,
    delay: .5,
    ease: "elastic",

  });

  gsap.from("#titleText", {
    duration: 3,
    x: -1300,
    y: 0,
    delay: 2,
    ease: "expo",

  });

  let vl = new TimelineMax({ repeat: -1, yoyo: true, });

  vl.from('#hexagon', 5, {
    x: -200,
    y: () => Math.random() * 400 - 200,
    stagger: 0.25,
    opacity: 0,
    scale: 1.5,
    rotate: 45,
    ease: "slow"

  });

  vl.to('#hexagon2', .5, {
    x: 700,
    y: () => Math.random() * 400 - 200,
    stagger: 0.25,
    opacity: 0,
    scale: 3,
    rotate: 45,
    ease: "rough"
  });

  vl.to('#hexagon3', 1, {
    x: () => Math.random() * 400 - 200,
    y: 700,
    stagger: 0.25,
    opacity: 0,
    scale: 3,
    rotate: 45,
    rotationX: 360,
    rotationY: 360,
    ease: "stairs"
  });







});  