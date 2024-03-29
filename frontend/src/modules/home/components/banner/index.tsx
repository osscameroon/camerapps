import { memo } from "react";
import styled from "styled-components";
import { size } from "../../../../constants";
import { FaGithub } from "react-icons/fa";
import ALinkButton from "../../../../common/alink-button";

const BannerWrapper = styled.div`
  margin: 0 3rem;
  display: flex;
  align-items: center;
  background: url("/bg-banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px;
  min-height: 55vh;
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

  @media (max-width: ${size.tablet}) {
    margin: 0 1rem;
  }

  @media (max-width: ${size.mobileL}) {
    ._content {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

type BannerProps = {};

const Banner = ({}: BannerProps) => {
  return (
    <BannerWrapper>
      <div className="_content">
        <h1>The home of Africa Tech Excellence</h1>
        <p>
          We are delighted to offer you a platform that gathers a wide variety
          of applications created and developed by African talents. From finance
          to education, games, and social networks, our catalog provides a
          multitude of options for all tastes and needs.
        </p>
        <ALinkButton
          href={"https://github.com/osscameroon"}
          type={"plain"}
          size={"large"}
          target="_blank"
        >
          <FaGithub className={"btn-adder__icon"} />
          Join the community
        </ALinkButton>
      </div>
    </BannerWrapper>
  );
};

export default memo(Banner);
