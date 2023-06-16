function codes() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      smoothMobile: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
   
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
   
    ScrollTrigger.refresh();
  }
  codes()
  gsap.from("#part1-right img",{
    x:500,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:5,
  })
  gsap.from("#part2-card1",{
    scrollTrigger:{
      trigger:("#part2-card1"),
      end:"top 50%",
      start:"top 80%",
      scroller:"#main",
      scrub:true
       },
       x:"-200",
       opacity:0,
       ease:"Expo.easeInOut",
      duration:3
  })
  gsap.from("#part2-card2",{
    scrollTrigger:{
      trigger:("#part2-card2"),
      end:"top 50%",
      start:"top 80%",
      scroller:"#main",
      scrub:true
       },
       x:"200",
       opacity:0,
       ease:"Expo.easeInOut",
      duration:3
  })
  gsap.from("#part3-right",{
    scrollTrigger:{
   trigger:("#part3-right"),
   end:"top 40%",
   start:"top 70%",
   scroller:"#main",
   scrub:true
    },
       y:100,
       duration:3,
       opacity:0,
  })
  gsap.from(".part2-right-side-text-box",{
    scrollTrigger:{
   trigger:(".part2-right-side-text-box"),
   end:"top 40%",
   start:"top 70%",
   scroller:"#main",
   stagger:3,
   scrub:true
    },
       y:100,
      //  duration:3,
       opacity:0,
  })
  gsap.from("#part6-right-part",{
    scrollTrigger:{
   trigger:("#part6-right-part"),
   end:"top 40%",
   start:"top 70%",
   scroller:"#main",
   scrub:true
    },
       x:100,
       duration:3,
       opacity:0,
       ease:"Expo.easeInOut"
  })

  gsap.from("#part6-left-part",{
    scrollTrigger:{
   trigger:("#part6-left-part"),
   end:"top 40%",
   start:"top 70%",
   scroller:"#main",
   scrub:true
    },
       y:300,
       duration:3,
       opacity:0,
       ease:"Expo.easeInOut"
  })
  gsap.from(".part7-text-box",{
    scrollTrigger:{
   trigger:(".part7-text-box"),
   end:"top 60%",
   start:"top 80%",
   scroller:"#main",
   scrub:true,
  
    },
       y:250,
       opacity:0,
       ease:"Expo.easeInOut",
       stagger:5
  })





  var arr=[
    {img:"",burgername:"BURGER KING"},
    {img:"",burgername:"BBQ BURGER"},
    {img:"",burgername:"BRAVO BURGER"},
    {img:"",burgername:"WHATABURGER"},
    {img:"",burgername:"FIVE GUYS"},
    {img:"",burgername:"CHILI BURSGER"},
    {img:"",burgername:"FATBURGER"},
    {img:"",burgername:"CHILL-BURGER"},
    {img:"",burgername:"SMASHBURGER"},
    {img:"",burgername:"BBQ BURGER"},
    {img:"",burgername:"CHICKEN BURGER"},
    {img:"",burgername:"BRAVO BURGER"},
  ]
  var clatter=""
arr.forEach(function(dets){
  clatter+=` <div id="part4-left-card-one">
  <img src="./part2-_left-img-removebg-preview.png" alt="">
  <h1>${dets.burgername}</h1>
  <p>Lorem ipsum, dolor sit amet  this consectetur adipisicing elit.</p>
  <h2><span>$45.50</span></h2>
<div id="part4-left-card-one-buttom"><button>Oder now</button> 
<i class="ri-heart-3-line heart"></i>
</div>
</div>`
})
document.querySelector("#part4-box-containor").innerHTML=clatter



var growth= document.querySelector("#progress")
var grow=0
if(grow<=100){
  setInterval(function(){
growth.style.height = `${grow++}px`;
}
),10}










gsap.to("#part5-pin-bol",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#part5-pin-bol",
    start:"top 5%",
    end:"top -168%",
    scrub:20,
    pin:"#part5-pin-bol"
  },
  rotate:"90deg",
  x:50
})
gsap.to("#part5-pin-bol",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#part7",
    start:"top 100%",
    end:"top 70%",
    scrub:20,
  },
  x:300,
  
  rotate:"90deg"
})
gsap.to("#part6-containor",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#part6-containor",
    start:"top 70%",
    end:"top 65%",
    scrub:20,
  },
  rotate:"3.5deg"
})




var mouse=document.querySelector("#circle-part2");
var part2=document.querySelector("#part2");
part2.addEventListener("mousemove",function(dets){
     mouse.style.left=`${dets.x+15}px`
     mouse.style.top=`${dets.y+15}px`
})

gsap.to("#page-layer-left,#page-layer-right",{
  width:"0%",
  ease:"Expo.easeInOut",
  duration:2
})
gsap.to("#page-layer",{
  top:"-120vh",
  ease:"Expo.easeInOut",
  duration:2,
  delay:1.3
})