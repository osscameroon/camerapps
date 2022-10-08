import React, {memo} from "react";
import {HeaderWrapper} from "./style/default";
import {appName, size} from "../../constants";
import styled from "styled-components";
import {FaDonate} from "react-icons/fa";
import {Link} from "react-router-dom";
import LinkButton from "../../common/link-button";
import {AiOutlinePlus} from "react-icons/ai";
import ALinkButton from "../../common/alink-button";

const LogoLink = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: .5rem;

  img {
    height: 30px;
  }

  @media (max-width: ${size.mobileL}) {
    strong {
      display: none;
    }
  }
`;

function Logo() {
    return (
        <LogoLink to={"/"}>
            <img src={"/logo.svg"} alt={"Camerapps's logo"}/><strong>{appName}</strong>
        </LogoLink>
    );
}

const HeaderUI = () => {

    return (
        <HeaderWrapper>
            <div className="header__container">
                <Logo/>
                <div className="actions">
                    <ALinkButton className={"custom--donation"} type={"link"}
                                 href={"https://opencollective.com/osscameroon/donate"} target={"_blank"}>
                        <FaDonate className={"donate-button__icon"}/>
                        <span>Make a donation</span>
                    </ALinkButton>
                    <LinkButton className={"custom--add"} type={"plain"} size={"small"} href={"/add-app"}>
                        <AiOutlinePlus className={"btn-adder__icon"}/>
                        <span>Add an application</span>
                    </LinkButton>
                </div>
            </div>
        </HeaderWrapper>
    );

}

export default memo(HeaderUI);
