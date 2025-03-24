gsap.registerPlugin(ScrollTrigger, CSSPlugin);


$(function(){
            var svgShape = $(".shape");

            function pathPrepare ($el) {
                    var svgLength = $el[1].getTotalLength();

                    $el.css("stroke-dasharray", svgLength);

                    gsap.set($el, {strokeDashoffset: svgLength});

            }

            pathPrepare(svgShape);
            
            var shapeTl = gsap.timeline({defaults:{ease: 'power1.out', duration:4, repeat:1, yoyo:true, yoyoEase: true},
                repeat:-1,});

            shapeTl.to('.shape1', {strokeDashoffset: 0})
            shapeTl.to('.shape2', {strokeDashoffset: 0})
            
        })

        var h2Tl = new gsap.timeline({defaults:{stagger: {amount:1}, autoAlpha:0, duration:.2}});
        h2Tl
        .from("body", {ease: "expo.inOut", backgroundColor: '#000', duration:1})
        .from(".header-block1 span", {ease: "steps(15)", x: 50})
        .from(".header-block2 span", {ease: "steps(19)", x: 50})
        .from(".header-block3 span", {ease: "steps(22)", x: 50})
        .from(".banner-description", {y:100, duration:1}, "<")



const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".chartipedia",
    start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=2000", // end after scrolling 500px beyond the start
    scrub: 1,
    pin:true,
    // markers: true
  }
});
tl.to(".title", {scale: 1, duration: 0.5, y:"-150px",})
tl.to(".title", {scale:"+=150", duration:5, ease:"power1.in",})



// cursor script start
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});

// cursor script end

// slide section start

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".slide-sec",
    start: "top top",
      end: "+=5000", 
    scrub: 0.2,
    repeat:1,
    yoyo:true,
    pin:true,
    // markers: true
  }
});

tl2.to(".benifits-right", {x:0})
tl2.from(".title-work", {x:800,})
tl2.from(".benefit_h-line", {x:1306,})
tl2.from(".benefit_description", {x:800,})
tl2.from(".benifits-img", {y:800, duration:2})


tl2.to(".triangle", {y:0,})
tl2.to(".triangle", { rotation:60, scale:1,})
tl2.to(".triangle", { rotation:90, scale:1,})
tl2.to(".triangle", { rotation:110, scale:1,})
tl2.to(".triangle", { rotation:140, scale:1,})
tl2.to(".triangle", { rotation:170, scale:1,})
tl2.to(".triangle", { rotation:200, scale:1,})
tl2.to(".triangle", { rotation:270, scale:1.4, x:90, })

tl2.to(".triangle", { rotation:0, y:-800, delay:2})
tl2.from(".benifits-img", {y:-800, delay:2.5})
tl2.from(".title-work", {x:800,})
tl2.from(".benefit_h-line", {x:1306,})
tl2.from(".benefit_description", {x:800,})
tl2.to(".inside-right", {autoAlpha:0,})
tl2.to(".benifits-left", {width:"0"})
tl2.to(".benifits-right", {width:"100%"},"<")



//chart section start


// const tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".chart-sec",
//     start: "top top",
//       end: "+=1400", 
//     scrub: 1,
//     pin:true,
//     markers: true
//   }
// });


var sec3introTl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".over-community",
                start: "top top",
                end: "+=6500",
                scrub:true,
            }
        })

        sec3introTl.from(".commun-head span", { autoAlpha:0, stagger:{amount:1}, duration:.1, repeat:1, repeatDelay:1, yoyo:true })
        sec3introTl.to('.commun-sub-head1 span', { autoAlpha:1, stagger:{amount:1}, duration:1, repeat:1,repeatDelay: .5, yoyo:true })
        sec3introTl.to(".commun-text1", { y:0, duration:2, autoAlpha:1, repeat:1,repeatDelay: 2, yoyo:true },"<")
        sec3introTl.to('.commun-sub-head2 span', { autoAlpha:1, stagger:{amount:1}, duration:1, repeat:1,repeatDelay: .5, yoyo:true })
        sec3introTl.to(".commun-text2", { y:0, duration:2, autoAlpha:1, repeat:1,repeatDelay: 2, yoyo:true },"<")
        sec3introTl.to('.commun-sub-head3 span', { autoAlpha:1, stagger:{amount:1}, duration:1, repeat:1,repeatDelay: .5, yoyo:true })
        sec3introTl.to(".commun-text3", { y:0, duration:2, autoAlpha:1, repeat:1,repeatDelay: 2, yoyo:true },"<")



var circ1Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".over-community",
                start: "top top",
                end: "+=7000",
                scrub:true,
                pin:true,
            }
        });


        var $degree = [980, 800, 870, 720, 990]

        circ1Tl.to(".over-community .yellow-bg", { scale:4, duration:.1},0)
        circ1Tl.from('.b-circle',{scale:0,autoAlpha:0, ease: "power1.in", duration:.1},"<")
        circ1Tl.to('.member-img',{ "--angle" : (i) => $degree[i], ease: "power1.inOut", duration: 1},'<')
        circ1Tl.to('.community--count', { autoAlpha:1  , duration:.1},'-=.6')
        circ1Tl.to('.community-count, .community-description', { y:0 , autoAlpha:1 , duration:.1 },'-=.6')
        circ1Tl.to('.community--count', { x: '240%' },'-=.4')
        circ1Tl.to('.community-count, .community-description', { autoAlpha:0 , duration:.2 },'-=.4')
        circ1Tl.to('.community--count', { scale:25  , duration:.15})

// Sidebar Navigator JS ------------------------------------------------------------------- 

var $sections = document.querySelectorAll('section');
var $indicator = document.querySelectorAll('.paginator-item');

    const resetCurrentActiveIndicator = () => {
        const activeIndicator = document.querySelector(".paginator-item.active");
        activeIndicator.classList.remove("active");
      };
      
      const onSectionLeavesViewport = (section) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                resetCurrentActiveIndicator();
                const element = entry.target;
                const indicator = document.querySelector(`li[rel='#${element.id}']`);
                indicator.classList.add("active");
                return;
              }
            });
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
          }
        );
        observer.observe(section);
      };

      $sections.forEach(onSectionLeavesViewport);

// Sidebar Navigator JS END -------------------------------------------------------------------      




 const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".explore-sec",
    start: "top top",
      // end: "+=1000", 
    pin:true,
    // scrub:true,
    toggleActions: 'play none play reverse'
  }
}); 
tl4.from(".explore-left, .explore-right", { autoAlpha:0, duration:1})
tl4.from(".exp-line span", {  stagger: {amount:1}, autoAlpha:0, duration:.2, color:"#ead050",})
tl4.from(".discription p span", {  stagger: {amount:1}, autoAlpha:0, duration:.2, color:"#ead050"})

