function abcd(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

abcd()



document.addEventListener("mousemove", function(dets){
    gsap.to(".cursor",{
        top: dets.y,
        left: dets.x,
        duration: 0.1
    })
})
    
function nav(){
    gsap.to(".span",{
        y: "-40",
        scrollTrigger:{
            trigger: "nav",
            scroller: ".main",
            // markers: true,
            top: "top 0",
            end: "top -10",
            scrub: true
        }
    })
    
    gsap.to(".nav i",{
        display: "block",
        scrollTrigger:{
            trigger: "nav",
            scroller: ".main",
            // markers:true,
            start: "top -20",
            end: "top -15",
            scrub: true
        }
    })
    
    
    gsap.to(".page1",{
        filter: "blur(20px)",
        transform: "scaleX(0.85)",
        scrollTrigger: {
            trigger: "page1",
            scroller: ".main",
            // markers: true,
            start: "top 0",
            end: "top -50%",
            scrub: true
        }
    })
}

nav()



gsap.to(".page2 img",{
    transform:"translateY(-50%) translateX(69%)",
    duration:10,
    repeat:-1,
    ease:"none"
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4-c1 h1",
        scroller:".main",
        markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub:2
    }
})

tl.from(".page4-c1 h1",{
    // trigger:"..page4-c1",
    y: 50,
    opacity: 0,
    scale:1.15,
    duration: 0.1 
})

    tl.from(".page4-c1 ",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1
    })

    tl.from(".page4-c2 h1",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1
    })

    tl.from(".page4-c2 video",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1
    })

    tl.from(".page4-c3 p",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1,
        scrub: true
    })

    tl.from(".page4-c3 button",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1
    })
    
    tl.from(".page4-c3 video",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1
    })

    
    tl.from(".page4-c4 p",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1
    })

    tl.from(".page4-c4 button",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1
    })
    
    tl.from(".page4-c4 video",{
        // trigger:"..page4-c1",
        y: 50,
        opacity: 0,
        scale:1.15,
        duration: 1
    })



    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5",
            scroller: ".main",
            start: "top 0",
            end: "top -70%",
            scrub: true,
            pin: true
        }
    })
    tl4.to(".page5-contant", {
        transform: "translateX(-50%)",
    }, "okay")
    tl4.to(".slider-in", {
        x: 650,
    }, "okay")
