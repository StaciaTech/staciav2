gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//let links = gsap.utils.toArray("nav a");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards",
    pin: true,
    pinSpacing: true,
    markers: true,
    start: "top-=120px top", // when the top of the trigger hits the top of the viewport
    end: "+=2000", // end after scrolling 1000px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});
tl.addLabel("card1");
tl.to('.card1',{
  yPercent:0,
  opacity: 1
}) 

tl.from('.card2', {
  yPercent:75,
  opacity: 0,
}) 
tl.addLabel("card2");
// set the active section based on the direction, and position it part-way through the transition because that's more intuitive
tl.add(() => setActiveNav(tl.scrollTrigger.direction > 0 ? 1 : 0), "-=0.15"); 
tl.to('.card1',{
  scale:0.95,
  yPercent:-0.5,
  opacity: 0.7
}, "-=0.3") 

tl.to('.card2', {
  yPercent:0,
  opacity: 1
}) 

tl.from('.card3', {
  yPercent:75,
  opacity: 0,
}) 
tl.addLabel("card3");
tl.add(() => setActiveNav(tl.scrollTrigger.direction > 0 ? 2 : 1), "-=0.15");

tl.to('.card2',{
  scale:0.98,
  yPercent:-0.4,
  opacity: 0.7
}, "-=0.3") 

tl.to('.card3', {
  yPercent:0,
  opacity: 1
}) 

tl.to('.card3', {});

gsap.utils.toArray(".nav a").forEach((a, i) => {
  a.addEventListener("click", e => {
    e.preventDefault();
    let pad = i === 0 ? 0 : tl.scrollTrigger.direction > 0 ? 2 : -2;
    gsap.to(window, {scrollTo: labelToScroll(tl, "card" + (i + 1)) + pad})
  });
});
function labelToScroll(timeline, label) {
  let st = timeline.scrollTrigger,
      progress = timeline.labels[label] / timeline.duration();
  return st.start + (st.end - st.start) * progress;
}
let circles = gsap.utils.toArray(".nav .circle");
function setActiveNav(index) {
  circles.forEach((circle, i) => circle.classList[i === index ? "add" : "remove"]("active"));
}
     