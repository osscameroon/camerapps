import React, {HTMLAttributeAnchorTarget, memo} from "react";
import styled from "styled-components";

const ALinkButtonWrapper = styled.a`
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5em;
  font-size: 1em;
  box-shadow: -1px 1px 7px -1px rgba(0, 0, 0, 0);
  -webkit-box-shadow: -1px 1px 7px -1px rgba(0, 0, 0, 0);
  -moz-box-shadow: -1px 1px 7px -1px rgba(0, 0, 0, 0);

  text-decoration: none;

  transition: all .3s 0s ease-in-out;

  &._plain {
    background-color: ${({theme}) => theme.black};
    color: ${({theme}) => theme.white};
    border: none;

    &:hover {
      box-shadow: -1px 1px 7px -1px rgba(0, 0, 0, 0.6);
      -webkit-box-shadow: -1px 1px 7px -1px rgba(0, 0, 0, 0.6);
      -moz-box-shadow: -1px 1px 7px -1px rgba(0, 0, 0, 0.6);
    }
  }

  &._bordered {
    border: 2px solid ${({theme}) => theme.black};
    background-color: transparent;
    color: ${({theme}) => theme.black};

    &:hover {
      background-color: ${({theme}) => theme.black};
      color: ${({theme}) => theme.white};
    }
  }

  &._link {
    background-color: transparent;
    color: ${({theme}) => theme.black};

    &:hover {
      text-decoration: underline;
    }
  }

  &._small {
    font-size: 1em;
    padding: 10px 15px;
  }

  &._medium {
    font-size: 1.3em;
    padding: 15px 25px;
  }

  &._large {
    font-size: 1.5em;
    padding: 15px 25px;
  }
  
`;

interface ALinkButtonProps extends Pick<React.LinkHTMLAttributes<HTMLLinkElement>, "className" | "children"> {
    type?: "plain" | "bordered" | "link";
    size?: "small" | "medium" | "large";
    href: string;
    target?: HTMLAttributeAnchorTarget;
    onClick?: (...args: any) => void;
}

const ALinkButton = ({type = "plain", children, onClick, className, size = "small", href, target}: ALinkButtonProps) => {

    return <ALinkButtonWrapper onClick={onClick} target={target} href={href} className={`_${type} _${size} ${className}`}>
        {children}
    </ALinkButtonWrapper>

}

export default memo(ALinkButton);
