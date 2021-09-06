import React, {memo} from "react";
import DonationButton from "../../common/donation-button";
import { HeaderWrapper } from "./style/default";
import {appName} from "../../constants";
import styled from "styled-components";
import {FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

function Logo() {
    return (
        <LogoLink to={"/"}>
            {appName}
        </LogoLink>
    );
}

const HeaderUI = () => {

    return (
        <HeaderWrapper>
            <div className="header__container">
                <Logo />
                <div className="actions">
                    <DonationButton />
                    <Link to="/add-app" className={"btn btn-adder"}><FaGithub className={"btn-adder__icon"} /> <span>Add an application</span> </Link>
                </div>
            </div>
        </HeaderWrapper>
    );

}

export default memo(HeaderUI);