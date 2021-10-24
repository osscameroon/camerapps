import React, {memo} from "react";
import CarouselUI from "./components/carousel";
import {HomeWrapper} from "./style/default";
import AppListUI from "./components/app-list";
import SearchingUI from "../../common/searching";

const HomeUI = () => {

    return (
        <HomeWrapper>
            <CarouselUI/>
            <div className="home-list__container">
                <SearchingUI />
                <AppListUI/>
            </div>
        </HomeWrapper>
    );

}

export default memo(HomeUI);