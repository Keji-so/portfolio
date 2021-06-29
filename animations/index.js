// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/all"

// import gsap from 'gsap/dist/gsap';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


// export const horizScroll = () => {
    
// let sections = gsap.utils.toArray(".card");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".card_container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: () => "+=" + document.querySelector(".card_container").offsetWidth
//   }
// });
  
  
//   }



// export const nameAnimation = () => {
//   let tl = gsap.timeline()

//   let headText = document.querySelector(".name_anim")
//   // let logo = document.querySelector("#logo-anim")
//   // let nav = document.querySelectorAll("#nav-anim")
//   // let icons = document.querySelectorAll(".icon-anim")
  
//   tl.from(headText, {
//     duration: 0.5,
//     opacity: 0,
//     y: 100,
//     ease: "Expo.easeOut",
//     stagger: {
//       amount: 0.3,
//     }
//   })

// }
