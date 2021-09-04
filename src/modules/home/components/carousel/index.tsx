import React, {memo} from "react";
import styled from "styled-components";
import SearchingUI from "../../../../common/searching";

const CarouselWrapper = styled.div`
  width: 100vw;
  height: 360px;
  background-color: #333;
  position: relative;
`;

const CarouselUI = () => {

    return (
        <CarouselWrapper>

            <SearchingUI />
        </CarouselWrapper>
    );

}

export default memo(CarouselUI);