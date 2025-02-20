const t1 = gsap.timeline();

t1.from("section",{
    x:-250,
    opacity:0,
    duration:1
})

t1.from("main img",{
    x:250,
    opacity:0,
    duration:1.2
})

t1.from("ul li",{
    y:-50,
    stagger:.3,
    opacity:0,
    duration:1
    
})