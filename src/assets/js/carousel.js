import Flickity from 'flickity'

export const CoachCarousel = () => {
    var elem = document.querySelector('#coach-carousel');
    return new Flickity(elem, {
        // options
        // cellAlign: 'left',
        // contain: true
        imagesLoaded: true,
        lazyLoad: true,
        wrapAround: true
    });
}

export const LatestAndBrighterCarousel = () => {
    var elem = document.querySelector('#latestandbrighter-carousel');
    return new Flickity(elem, {
        contain: true,
        // options
        cellAlign: 'center',
        initialIndex: 2,
        pageDots: false,
        adaptiveHeight: true,
        imagesLoaded: true,
        lazyLoad: true
        // contain: true
    });
}

export const NavigatorCarousel = () => {
    var elem = document.querySelector('#navigator-carousel');
    return new Flickity(elem, {
        // options
        contain: true,
        pageDots: false,
        adaptiveHeight: true,
        imagesLoaded: true
        // contain: true
    });
}

export default Flickity;