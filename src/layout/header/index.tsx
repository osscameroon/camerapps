import React, {memo} from "react";
import DonationButton from "../../common/donation-button";
import { HeaderWrapper } from "./style/default";
import {appName} from "../../constants";

function Logo() {
    return (
        <>
            {appName}
        </>
    );
}

const HeaderUI = () => {

    return (
        <HeaderWrapper>
            <div className="header__container">
                <Logo />
                <DonationButton />
            </div>
        </HeaderWrapper>
    );

}

export default memo(HeaderUI);