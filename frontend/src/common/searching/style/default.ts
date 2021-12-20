import styled from "styled-components";
import {size} from "../../../constants";

export const SearchingWrapper = styled.form<{visible?: boolean}>`
  height: 50px;
  min-width: 100px;
  max-width: 800px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: -25px;
  border-radius: 50px;
  padding: .3em;
  z-index: 9;
  
  display: flex;
  align-items: center;
  
  box-shadow: 0 1px 1px rgba(0,0,0,0.05),
              0 2px 2px rgba(0,0,0,0.05),
              0 4px 4px rgba(0,0,0,0.05),
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.05);
  
  transform: translateX(-50%);
  left: 50%;
  
  .dropdowns {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    
  }
  
  @media (max-width: ${size.tablet}) {
    position: relative;
    width: 100%;
    top: 0;
    box-shadow: none;
    //background-color: #f1f1f1;
    
    flex-direction: column;
    justify-content: center;
    
    height: 100px;
    border-radius: 0;
    padding: 0;
    
    .dropdowns {
      height: 60px;
      width: calc(100% - 20px);
      justify-content: flex-start;
    }
  }
  
`;