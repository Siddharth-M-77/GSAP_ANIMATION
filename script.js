gsap.from("#page1 img", {
  opacity: 0,
  scale: 0,
  duration: 2,
  rotate:360,
  delay: 2,
  duration: 2,
  ease: "elastic",
});
gsap.from("#page2 .boxs .card", {
  opacity: 0,
  x: -800,
  rotateY: 180,
  rotateSpeed: 1,
  rotateX: 180,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2 .card",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from("#page2 h2", {
  opacity: 0,
  rotateY: -1200,
  scale: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.to("#page3 h1", {
  x: -1600,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 4,
    pin: true,
  },
});
