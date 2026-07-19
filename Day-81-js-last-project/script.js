
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".rght-side",
            prevEl: ".lft-side",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 9000,
            disableOnInteraction: false,
        },
        loop: true,

    });



    let mouse = document.querySelector(".mouse");
    let mouseDot = document.querySelector(".mouse-dot");

    document.addEventListener("mousemove", (e) => {
        mouse.style.top = e.clientY + "px";
        mouseDot.style.top = e.clientY + "px";
        mouse.style.left = e.clientX + "px";
        mouseDot.style.left = e.clientX + "px";
    })


    // section2 animation

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            start: "0% 80%",
            end: "60% 50%",
            // markers: true,
        }
    })

    tl.to(".line-2", {
        width: "100%",
        duration: 2
    }
    )


    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: "#section2",
            start: "0% 100%",
            end: "100% 0%",
            // markers: true,
            scrub: 1
        }
    })

    tl2.to("#image-1",{
        y: 0
    }, 'a')
    .to("#image1-cont h1",{
        y: -50
    }, 'a')
    .to("#image1-cont p",{
        y: -50
    }, 'a')


     let tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: "#section3",
            start: "0% 100%",
            end: "100% 0%",
            // markers: true,
            scrub: 1
        }
    })

    tl3.to("#image-2",{
        y: 0
    }, 'a')
    .to("#image2-cont h1",{
        y: -50
    }, 'a')
    .to("#image2-cont p",{
        y: -50
    }, 'a')

      let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: "#section4",
            start: "0% 100%",
            end: "100% 0%",
            // markers: true,
            scrub: 1
        }
    })

    tl4.to("#image-3",{
        y: 0
    }, 'a')
    .to("#image3-cont h1",{
        y: -50
    }, 'a')
    .to("#image3-cont p",{
        y: -50
    }, 'a')


});


