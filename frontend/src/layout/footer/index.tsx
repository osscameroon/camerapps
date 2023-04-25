import { memo } from "react";
import { FaFacebook, FaGithub, FaSlack, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { size } from "../../constants";

const FooterWrapper = styled.div`
  display: flex;
  height: 60px;
  background-color: ${({ theme }) => theme.secondary};
  padding: 0 8em;
  align-items: center;
  justify-content: space-between;

  color: #333;

  a {
    color: ${({ theme }) => theme.primary};
  }

  .accounts {
    display: flex;
    align-items: center;

    a {
      margin-left: 1em;
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    padding: 0em 3em;

    .accounts {
      span {
        display: none;
      }
    }
  }

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: 0.5em 1em;

    .copyright-text {
      width: 100%;
      text-align: center;
    }

    .accounts {
      span {
        display: none;
      }
    }
  }
`;

const FooterUI = () => {
  return (
    <FooterWrapper>
      <span className="copyright-text">
        © {new Date().getFullYear()}{" "}
        <a href="https://github.com/osscameroon" target={"_blank"}>
          OSS Cameroon
        </a>
        , All rights reserved.
      </span>
      <div className="accounts">
        <span>Follow our community </span>
        <a href="/">
          <FaFacebook color={"#000"} size={24} />
        </a>
        <a href="/">
          <FaTwitter color={"#000"} size={24} />
        </a>
        <a href="/">
          <FaGithub color={"#000"} size={24} />
        </a>
        <a href="/">
          <FaSlack color={"#000"} size={24} />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default memo(FooterUI);
