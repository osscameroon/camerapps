import React, {memo} from "react";
import styled from "styled-components";
import EmptyStateImage from '../../assets/images/empty-state.gif';

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;
    text-align: center;
    
    strong {
      font-size: 1.7em;
      font-weight: 700;
    }
    
    p {
      font-weight: 300;
      margin-top: .5em;
    }
    
    .icon-empty {
      width: 250px;
    }
  }
`;

const EmptyStateUI = () => {

    return (
        <EmptyWrapper>
            <div className="content">
                {/*<RiEmotionUnhappyLine />*/}
                <img src={EmptyStateImage} className={"icon-empty"} alt="Empty state gif"/>
                <strong>No results found!</strong>
                <p>It seems we can’t find any results based on your search.</p>
            </div>
        </EmptyWrapper>
    );

}

export default memo(EmptyStateUI);