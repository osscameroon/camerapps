import React, {memo} from "react";
import CarouselUI from "./components/carousel";
import {HomeWrapper} from "./style/default";
import AppListUI from "./components/app-list";

const HomeUI = () => {

    return (
        <HomeWrapper>
            <CarouselUI/>
            <div className="home-list__container">
                <AppListUI/>
            </div>
        </HomeWrapper>
    );

}

export default memo(HomeUI);