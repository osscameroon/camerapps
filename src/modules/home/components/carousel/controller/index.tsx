
class CarouselController {

    sliderOptions = {
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true
    };

    goNext(customSliderRef: any) {
        customSliderRef.current.slickNext();
    }

    goPrev(customSliderRef: any) {
        customSliderRef.current.slickPrev();
    }

}

export default new CarouselController();