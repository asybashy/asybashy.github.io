
const marinasquare = document.querySelector('.container');
console.log(marinasquare)

const tl = new TimelineMax();

tl.fromTo(marinasquare,1.5,{y:"50%"},{y:"0%"});