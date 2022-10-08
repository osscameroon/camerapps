import React, {memo, useEffect} from "react";
import {HomeWrapper} from "./style/default";
import AppListUI from "./components/app-list";
import AppStore from "../../stores/AppStore";
import Banner from "./components/banner";
import SearchingUI from "../../common/searching";

const HomeUI = () => {

    useEffect(() => {
        return () => {
            AppStore.clearStore();
        }
    }, [])

    return (
        <HomeWrapper>
            <Banner />
            <SearchingUI />
            <div className="home-list__container">
                <AppListUI/>
            </div>
        </HomeWrapper>
    );

}

export default memo(HomeUI);
