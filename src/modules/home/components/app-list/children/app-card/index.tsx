import {memo} from "react";
import styled from "styled-components";
import appLogo from "./../../../../../../assets/images/app.svg";
import {IApp} from "../../../../../../model/IApp";
import {FaFacebookF, FaGithub, FaSlack, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineLink} from "react-icons/ai";

const AppCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  padding: 1em;
  position: relative;

  background: #fff;
  border: 1px solid #d5e3ec;
  box-shadow: 0 2px 4px #d8e1e8;
  border-radius: 3px;
  transition: .3s;
  
  strong {
    margin: .5em 0em 1em 0 ;
  }
  
  p {
    font-size: .9em;
  }
  
  img {
    width: 60px;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: .3s;
    transform: translate(6px, 6px);
    box-shadow: 0 2px 4px #d8e1e8;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: .3s;
    box-shadow: 0 2px 4px #d8e1e8;
  }

  &:hover {
    border-color: #000;
    
    &::before {
      transform: rotate(5deg);
    }
    
    &::after {
      transform: rotate(-5deg);
    }
  }
  
  .accounts{
    margin-top: 1em;
    display: flex;
    
    button, a {
      border: none;
      background-color: #eee;
      height: 30px;
      width: 30px;
      border-radius: 5px;
      margin-right: 5px;  
      
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .3s 0s ease-in-out;
      
      &:hover {
        background-color: #000;
      }
    }
  }
`;

interface AppCardProps {
    app: IApp
}

const AppCardUI = ({app}: AppCardProps) => {

    return (
        <AppCardWrapper>
            <img src={appLogo} alt="app's logo"/>
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="accounts">
                <button className={""}><FaFacebookF color={"#ccc"} size={17} /></button>
                <button className={""}><FaSlack color={"#ccc"} size={17} /></button>
                <button className={""}><FaTwitter color={"#ccc"} size={17} /></button>
                <button className={""}><FaGithub color={"#ccc"} size={17} /></button>
                <button className={""}><FaLinkedinIn color={"#ccc"} size={17} /></button>
                <a href={"#"} target={"_blank"}><AiOutlineLink color={"#ccc"} size={17} /></a>
            </div>
        </AppCardWrapper>
    );

}

export default memo(AppCardUI);