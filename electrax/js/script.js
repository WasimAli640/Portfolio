window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    gsap.registerPlugin(ScrollTrigger); 

    let sections = gsap.utils.toArray("section");
    sections.forEach((section) => {
        let sectionAnimation = gsap.timeline({
            scrollTrigger : {
                trigger: section,
                start : "top center",
                // markers:true
            }
        })
        let sectionContent = section.querySelectorAll(".section-animation-content")
        sectionAnimation.from(sectionContent, .7, {  opacity: 0 , y : '4rem', stagger : 0.1  })
    })


    gsap.from(".hero-right-image img, .hero-title-heading, .hero-title-paragraph, .hero-c-to-a-button .btn" , .5, { opacity: 0 , y : '4rem', stagger : 0.2 })

    gsap.to('.tk-image-collage', {
        scrollTrigger: {
            trigger : '.collage-section',
            scrub: 2,
            start: 'top center',
            end : 'bottom bottom',
            pin: false,
            markers:false
        },
        y : "-100%",
        // stagger: 1,
    })

    let imageWrapper = document.querySelector(".advertisement-section .image-carousel-wrapper .image-carousel");

    gsap.to('.advertisement-section .image-carousel-wrapper', {
        scrollTrigger : {
            trigger : '.advertisement-section ',
            scrub: 2,
            start: 'top-=20% top',
            end : "bottom top",
            pin:false,
            markers: false
        },
        x : - imageWrapper.clientWidth/2
    })

    // gsap.to('.advertisement-section .image-carousel-wrapper', { x : "-25%" })

    let header = document.querySelector(".header");
    var oldScroll = window.scrollY;
    
    function sticky() {
        this.scrollY > 0 ? header.classList.add("sticky") : header.classList.remove("sticky") 
        
        // console.log("oldScroll - " + oldScroll, "current Scroll - " + this.scrollY)
        oldScroll < this.scrollY ? header.classList.contains("scrolling-up") ? header.classList.replace("scrolling-up","scrolling-down") : header.classList.add("scrolling-down") :  header.classList.replace("scrolling-down", "scrolling-up")
        oldScroll = window.scrollY
    } 
    this.addEventListener("scroll", () =>{
        sticky();
    });
    sticky();
});
