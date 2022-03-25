import React, {memo, useEffect} from "react";
import CarouselUI from "./components/carousel";
import {HomeWrapper} from "./style/default";
import AppListUI from "./components/app-list";
import SearchingUI from "../../common/searching";
import AppStore from "../../stores/AppStore";

const HomeUI = () => {

    useEffect(() => {
        return () => {
            AppStore.clearStore();
        }
    }, [])

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
