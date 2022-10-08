import React, {memo} from "react";
import styled from "styled-components";
import LinkButton from "../../../../common/link-button";
import {size} from "../../../../constants";
import {FaGithub} from "react-icons/fa";

const BannerWrapper = styled.div`
  margin: 0 3rem;
  display: flex;
  align-items: center;
  background: url("/bg-banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px;
  min-height: 60vh;
  margin-bottom: 3rem;
  
  ._content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: ${size.tablet};

    h1 {
      margin: 0;
      font-weight: bold;
      font-size: 3rem;
      width: 80%;
      text-align: center;
    }

    p {
      text-align: center;
      margin: 2rem 0;
      font-size: 1.1rem;
      line-height: 27px;
    }
  }
`;

type BannerProps = {}

const Banner = ({}: BannerProps) => {

    return <BannerWrapper>
        <div className="_content">
            <h1>The home of Africa Tech Excellence</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati
                sapiente, sunt totam vitae? Blanditiis eligendi, et facilis laboriosam nobis quam saepe sapiente similique
                velit.</p>
            <LinkButton href={"/"} type={"plain"} size={"large"}>
                <FaGithub className={"btn-adder__icon"}/>
                Join the community
            </LinkButton>
        </div>
    </BannerWrapper>

}

export default memo(Banner);
