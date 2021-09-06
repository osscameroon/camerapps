import React, {memo} from "react";
import CarouselUI from "./components/carousel";
import { HomeWrapper } from "./style/default";
import EmptyStateUI from "../../common/empty-state";

const HomeUI = () => {

    return (
        <HomeWrapper>
            <CarouselUI />
            <div className="home-list__container">
                <EmptyStateUI />
            </div>
        </HomeWrapper>
    );

}

export default memo(HomeUI);