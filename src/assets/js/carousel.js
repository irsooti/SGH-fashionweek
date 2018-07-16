import Flickity from 'flickity'

export const CoachCarousel = () => {
    var elem = document.querySelector('#coach-carousel');
    return new Flickity(elem, {
        // options
        // cellAlign: 'left',
        // contain: true
    });
}

export const LatestAndBrighterCarousel = () => {
    var elem = document.querySelector('#latestandbrighter-carousel');
    return new Flickity(elem, {
        contain: true,
        // options
        cellAlign: 'center',
        initialIndex: 1,
        pageDots: false
        // contain: true
    });
}

export const NavigatorCarousel = () => {
    var elem = document.querySelector('#navigator-carousel');
    return new Flickity(elem, {
        // options
        contain: true,
        pageDots: false
        // contain: true
    });
}

export default Flickity;