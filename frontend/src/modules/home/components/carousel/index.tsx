import React, {memo} from "react";
import BannerImage from "../../../../assets/images/banner.jpg";
import {CarouselWrapper} from "./style/default";
import Slider from "react-slick";
import CarouselController from "./controller";
import CarouselControlUI from "./children/carousel-control";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyBuilder from "../../../../utils/KeyBuilder";

const CarouselUI = () => {

    const customSlider: any = React.createRef();

    return (
        <CarouselWrapper>
            <CarouselControlUI position={"left"} action={() => CarouselController.goPrev(customSlider)} />
            <CarouselControlUI position={"right"} action={() => CarouselController.goNext(customSlider)} />
            <Slider className={"slider"} {...CarouselController.sliderOptions} ref={customSlider}>
                {
                    [1].map((_item) => {
                        return (
                            <div className="slide-container" key={KeyBuilder.build}>
                                <div className="slide__image">
                                    <img src={BannerImage} alt="Banner png"/>
                                </div>
                                <div className="slide__description">
                                    <div className="description-content">
                                        <h2>OSS Cameroon</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore hic maiores odit porro
                                            praesentium provident totam, vel.</p>
                                        <button className={"btn btn-secondary"}>JOIN OUR COMMUNITY</button>
                                    </div>
                                </div>
                            </div>);
                    })
                }
            </Slider>
            {/*<SearchingUI/>*/}
        </CarouselWrapper>
    );

}

export default memo(CarouselUI);