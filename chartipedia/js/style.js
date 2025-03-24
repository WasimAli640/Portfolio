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


        var circ1Tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".over-community",
                start: "top top",
                end: "+=5000",
                scrub:true,
                pin:true,
            }
        });

        var $degree = [980, 800, 870, 720, 990]

        circ1Tl.to(".over-community .yellow-bg", { scale:1.5, duration:.1})
        circ1Tl.from('.b-circle',{scale:0,autoAlpha:0, ease: "power1.in", duration:.1},"<")
        circ1Tl.to('.member-img',{ "--angle" : (i) => $degree[i], ease: "power1.inOut", duration: 1},'+=.1')
        circ1Tl.to('.community--count', { autoAlpha:1  , duration:.1},'-=.6')
        circ1Tl.to('.community-count, .community-description', { y:0 , autoAlpha:1 , duration:.1 },'-=.6')
        circ1Tl.to('.community--count', { x: 540 },'-=.4')
        circ1Tl.to('.community-count, .community-description', { autoAlpha:0 , duration:.2 },'-=.4')
        circ1Tl.to('.community--count', { scale:15  , duration:.15})


        var sec3introTl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".over-community",
                start: "top top",
                end: "+=5000",
                scrub:true,
            }
        })

        sec3introTl.from(".commun-head span", { autoAlpha:0, ease: "steps(22)", stagger:1, duration:.1, repeat:1, repeatDelay:1, yoyo:true })
        sec3introTl.to('.commun-sub-head1 span', { autoAlpha:1, ease: "steps(18)", stagger: .2, duration:1, repeat:1,repeatDelay: .5, yoyo:true })
        sec3introTl.to(".commun-text1", { y:0, duration:1, autoAlpha:1, repeat:1,repeatDelay: 1, yoyo:true },">")
        sec3introTl.to('.commun-sub-head2 span', { autoAlpha:1, ease: "steps(19)", stagger: .2, duration:1, repeat:1,repeatDelay: .5, yoyo:true })
        sec3introTl.to(".commun-text2", { y:0, duration:1, autoAlpha:1, repeat:1,repeatDelay: 1, yoyo:true },">")
        sec3introTl.to('.commun-sub-head3 span', { autoAlpha:1, ease: "steps(13)", stagger: .2, duration:1, repeat:1,repeatDelay: .5, yoyo:true })
        sec3introTl.to(".commun-text3", { y:0, duration:1, autoAlpha:1, repeat:1,repeatDelay: 1, yoyo:true },">")


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
            threshold: 0.75
          }
        );
        observer.observe(section);
      };

      $sections.forEach(onSectionLeavesViewport);

// Sidebar Navigator JS END -------------------------------------------------------------------      
