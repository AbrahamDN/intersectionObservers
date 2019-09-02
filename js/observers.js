
function sectionOneObserver() {

    const header = document.querySelector('header');
    const sectionOne = document.querySelector('.home-intro');

    const sectionOneOptions = {
        rootMargin: '-120px 0px 0px 0px'
    };

    const sectionOneObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting)
                header.classList.add('nav-scrolled');
            else
                header.classList.remove('nav-scrolled');
        })
    }, sectionOneOptions);
    sectionOneObserver.observe(sectionOne);

}
sectionOneObserver();


function appearOnScroll() {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -200px 0px'
    };
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
}
appearOnScroll();

function lazyLoadImages() {
    const images = document.querySelectorAll('[data-src]');

    const imageOptions = {};
    const imageObserver = new IntersectionObserver((entries, imageObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            else {
                preLoadImage(entry.target);
                imageObserver.unobserve(entry.target);
            }
        });
    }, imageOptions);

    images.forEach(image => imageObserver.observe(image));
}
lazyLoadImages();

function preLoadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;

    img.src = src;

}