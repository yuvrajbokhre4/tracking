let oldLocation;

gsap.to( {
    scrollTrigger: {
      trigger: ".body",
      start: "top bottom",
      end: "bottom top",
      // markers: true,
      // type:"touch",
      // pin: true,
      scrub: 0.5,
    },
    onUpdate: (self.progess)=> render, // use animation onUpdate instead of scrollTrigger's onUpdate
  });
  

  function scrollrender() {

  }