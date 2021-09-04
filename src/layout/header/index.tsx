import React, {memo} from "react";
import DonationButton from "../../common/donation-button";
import { HeaderWrapper } from "./style/default";
import {appName} from "../../constants";
import styled from "styled-components";

const LogoLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

function Logo() {
    return (
        <LogoLink href={"/"}>
            {appName}
        </LogoLink>
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