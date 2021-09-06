import React, {memo} from "react";
import {FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled, {css} from "styled-components";

interface CarouselControlProps {
    position: "left" | "right";
    action: () => void;
}

const ControlWrapper = styled.button<{position: string}>`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border: none;
  background-color: #000;
  right: 2em;
  top: 50%;
  transform: translateY(-50%);
  
  ${props => props.position === "left" && css`
    left: 2em;
  `}
`;

const CarouselControlUI = ({position = "left", action}: CarouselControlProps) => {

    return (
        <ControlWrapper position={position} onClick={action}>
            {
                position === "left" ?
                    <FaChevronLeft color={"#fff"} /> : <FaChevronRight color={"#fff"} />
            }
        </ControlWrapper>
    );

}

export default memo(CarouselControlUI);