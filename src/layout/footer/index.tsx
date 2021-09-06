import React, {memo} from "react";
import {FaFacebook, FaGithub, FaSlack, FaTwitter} from "react-icons/fa";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  height: 60px;
  background-color: #f1f1f1;
  padding: 0 8em;
  align-items: center;
  justify-content: space-between;
  
  color: #333;
  
  .accounts {
    display: flex;
    align-items: center;
    
    a {
      margin-left: 1em;
    }
  }
`;

const FooterUI = () => {

    return (
        <FooterWrapper>
            <span className="copyright-text">
                © {(new Date()).getFullYear()} OSS Cameroon, All rights reserved.
            </span>
            <div className="accounts">
                <span>Follow our community </span>
                <a href="/"><FaFacebook color={"#000"} size={24} /></a>
                <a href="/"><FaTwitter color={"#000"} size={24} /></a>
                <a href="/"><FaGithub color={"#000"} size={24} /></a>
                <a href="/"><FaSlack color={"#000"} size={24} /></a>
            </div>
        </FooterWrapper>
    );

}

export default memo(FooterUI);