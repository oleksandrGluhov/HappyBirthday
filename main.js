var splide = new Splide('.splide', {
    direction: 'ttb',
    height: '10rem',
    wheel: true,
});

splide.mount();
document.querySelector(".splide__track").style.height = "100vh";

