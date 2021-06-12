/*
** A la main
*/
// gsap.from(".main__image", {left: '-50vw', duration: 1.5});
// gsap.to(".sun", {rotation: 27, x: 100, duration: 1, delay: 1});
// gsap.from('.main__title', {y: 20, clipPath: 'inset(0 0 100% 0)', delay: 2});
// gsap.from('.main__content', {opacity: 0, duration: 2, delay: 3});

/*
** Timeline
*/

const timeline = gsap.timeline({
  defaults: {
    ease: 'power2.inOut',
    duration: 1,
  },
  onComplete: function () {
    console.log('oncomplete');
    document.querySelector(".sun").classList.add("sun--draw");
  }
});

timeline
.from(".main__image", {left: '-50vw'})
.from(".card", {x: -100, opacity: 0})
.from(".card__title", {y: -20, opacity: 0})
.from(".card__content", {y: -20, opacity: 0}, "-=0.5")
.from(".sun", {opacity: 0}, "-=1")
.from('.main__title', {y: 20, clipPath: 'inset(0 0 100% 0)'})
// .from('.main__content', {opacity: 0, y: 300})
// .to(".sun", {rotation: 27, x: 100}, "-=1.5")

/*
** SCROLL
*/


var scrollDistance = document.body.clientHeight / 2;
var winScrollY;
const timelineScrolled = gsap.timeline({
  paused: true,
  defaults: {
    ease: 'power2.inOut',
    duration: 1,
  },
});

timelineScrolled
.from('.main__content', {opacity: 0, y: 300})
.to(".sun", {rotation: 27, x: 100}, "-=1.5")

function scrolled() {
  winScrollY = window.scrollY;
  timelineScrolled.progress(winScrollY / scrollDistance);
}
scrolled();

window.addEventListener("scroll", scrolled);