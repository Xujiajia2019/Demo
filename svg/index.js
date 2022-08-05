
document.querySelector("#hello-svg").classList.add('write')

var tl = new TimelineLite();
tl.to('#circle',{x: 260})
  .to('#circle',{x: 260, y:260})
  .to('#circle',{x: 0, y:260})
  .to('#circle',{x: 0, y: 0})



// gsap.fromTo('#circle', {
//   x: 0,
//   opacity: 0
// },{
//   x: 320,
//   opacity: 1,
//   duration: 1
// })