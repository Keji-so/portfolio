import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const imageAnim = () => {

    gsap.utils.toArray("#sections").forEach(anim => {
        gsap.from(anim, {
          scrollTrigger: {
            trigger: anim,
            start: "top bottom",
            toggleActions: "play none none none",
          },
          duration: 1.7,
          y: 100,
          transformOrigin: "center center",
          ease: "Power3.easeOut",
          stagger: {
            amount: 0.3,
          }
        })
      })
    
    gsap.utils.toArray(".image").forEach(container => {
        let image = container.querySelector(".img")         

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "play none none none",
          },
        })
    
        tl.set(container, { autoAlpha: 1 })
      
       tl.from(image, {
          duration: 2,
           y: 100,
           delay: 1.7,
           ease: "Expo.easeOut"
       })
      })
  
  
  }