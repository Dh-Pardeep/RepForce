gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero_section_animation", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero_section_animation",
        start: "20% 20%",
        end: "bottom 20%",
        pin: true,
        scrub: true,
        scale: 0,
        pinSpacing: false,
        markers: false,
    },
});
gsap.from("#mobile_section", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#mobile_section",
        start: "top 60%",
        end: "bottom 100%",
        scrub: true,
        scale: 0,
        markers: false,
    },
});
