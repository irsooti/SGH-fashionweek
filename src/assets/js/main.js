
import Flickity, { CoachCarousel, LatestAndBrighterCarousel, NavigatorCarousel } from './carousel';
const viewport = {
    DESKTOP: 1280
}
let coachCarousel = CoachCarousel();
let latestAndBrighterCarousel = LatestAndBrighterCarousel()
let navigatorCarousel;

// console.log(coachCarousel.init())
// let coachCarouselInit = coachCarousel.init()();

addEventListener('load', () => {
    if (window.innerWidth < viewport.DESKTOP) {
        navigatorCarousel = NavigatorCarousel();
        coachCarousel = CoachCarousel();
    }
    
});

addEventListener('resize', () => {
    if (window.innerWidth >= viewport.DESKTOP && navigatorCarousel !== undefined) {
        navigatorCarousel.destroy();
        coachCarousel.destroy();
    }

    else {
        navigatorCarousel = NavigatorCarousel();
        coachCarousel = CoachCarousel();
    }
})