import {memo} from "react";
import styled from "styled-components";
import appLogo from "../../../../../../assets/images/app.svg";
import {IApp} from "../../../../../../model/IApp";
import {FaFacebookF, FaGithub, FaSlack, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineLink} from "react-icons/ai";

const AppCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  position: relative;

  background: #fff;
  border: 1px solid #d5e3ec;
  box-shadow: 0 2px 4px #d8e1e8;
  border-radius: 3px;
  transition: .3s;
  
  ._flex {
    display: inline-flex;
    gap: 5px;
  }
  
  strong {
    margin: .5em 0em 1em 0 ;
  }
  
  p {
    font-size: .9em;
  }
  
  img {
    max-height: 60px;
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
    
    a, a {
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

const Tag = styled.div`
  padding: .3em .5em;
  background-color: #f1f1f1;
  border-radius: 50px;
  font-size: .8em;
  font-style: italic;
  margin-top: 1em;
`;

interface AppCardProps {
    app: IApp
}

const AppCardUI = ({app}: AppCardProps) => {

    return (
        <AppCardWrapper>
            <img src={app?.logoUrl ?? appLogo} alt={app?.name + "'s logo"}/>
            <strong>{app?.name}</strong>
            <p>{app?.description}</p>
            <div className="_flex">
                <Tag>{app?.category?.name ?? ""}</Tag>
                <Tag>{app?.genre?.name ?? ""}</Tag>
            </div>
            <div className="accounts">
                {
                    app?.facebookUrl && <a href={app?.facebookUrl} target={"_blank"} rel="noreferrer" className={""}><FaFacebookF color={"#ccc"} size={17} /></a>
                }
                {
                    app?.slackUrl && <a href={app?.slackUrl} target={"_blank"} rel="noreferrer" className={""}><FaSlack color={"#ccc"} size={17} /></a>
                }
                {
                    app?.twitterUrl && <a href={app?.twitterUrl} target={"_blank"} rel="noreferrer" className={""}><FaTwitter color={"#ccc"} size={17} /></a>
                }
                {
                    app?.githubUrl && <a href={app?.githubUrl} target={"_blank"} rel="noreferrer" className={""}><FaGithub color={"#ccc"} size={17} /></a>
                }
                {
                    app?.linkedInUrl && <a href={app?.linkedInUrl} target={"_blank"} rel="noreferrer" className={""}><FaLinkedinIn color={"#ccc"} size={17} /></a>
                }
                {
                    app?.websiteUrl && <a href={app?.websiteUrl} target={"_blank"} rel="noreferrer"><AiOutlineLink color={"#ccc"} size={17} /></a>
                }
            </div>
        </AppCardWrapper>
    );

}

export default memo(AppCardUI);
