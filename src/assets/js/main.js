
import Flickity, { CoachCarousel, LatestAndBrighterCarousel, NavigatorCarousel } from './carousel';
import lozad from 'lozad';

const viewport = {
    DESKTOP: 1280
}

const observer = lozad();
observer.observe();

let coachCarousel = CoachCarousel();
let latestAndBrighterCarousel = LatestAndBrighterCarousel()
const navigatorCarousel = NavigatorCarousel();

// console.log(coachCarousel.init())
// let coachCarouselInit = coachCarousel.init()();

const sections = document.querySelectorAll('[data-id]');


navigatorCarousel.on('change', function (index) {
    sections.forEach(el => {
        if (el.getAttribute('data-id') == index)
            return el.classList.add('show')
        return el.classList.remove('show')
    })
});

navigatorCarousel.on('staticClick', function (event, pointer, cellElement, cellIndex) {
    navigatorCarousel.select(cellIndex)
    if (cellIndex > sections.length || cellIndex === undefined) {
        return;
    }

    sections.forEach(el => {
        if (el.getAttribute('data-id') == cellIndex)
            return el.classList.add('show')
        return el.classList.remove('show')
    })
});


addEventListener('load', () => {
    if (window.innerWidth < viewport.DESKTOP) {
        coachCarousel = CoachCarousel();
        coachCarousel.resize()
        navigatorCarousel.resize()
    }

});

addEventListener('resize', () => {
    if (window.innerWidth >= viewport.DESKTOP && navigatorCarousel !== undefined) {
        // navigatorCarousel.destroy();
        coachCarousel.destroy();
    }

    else {
        coachCarousel = CoachCarousel();
    }
})