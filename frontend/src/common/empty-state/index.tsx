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
  
  .btn--refetch {
    border: none;
    border: 2px solid #000;
    background-color: transparent;
    margin-top: 1em;
    font-size: .7em;
    color: #000;
    
    &:hover {
      background-color: #000;
      color: white;
    }
  }
`;

interface EmptyStateUIProps {
    refetch?: () => void;
}

const EmptyStateUI = ({refetch}: EmptyStateUIProps) => {

    return (
        <EmptyWrapper>
            <div className="content">
                {/*<RiEmotionUnhappyLine />*/}
                <img src={EmptyStateImage} className={"icon-empty"} alt="Empty state gif"/>
                <strong>No results found!</strong>
                <p>It seems we can’t find any results based on your search.</p>
                {
                    refetch ? <button className="btn btn--refetch" type={"button"} onClick={refetch}>Refresh</button> : null
                }
            </div>
        </EmptyWrapper>
    );

}

export default memo(EmptyStateUI);
