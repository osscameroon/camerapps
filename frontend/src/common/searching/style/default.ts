import styled from "styled-components";
import {size} from "../../../constants";

export const SearchingWrapper = styled.form<{visible?: boolean}>`
  height: 50px;
  min-width: 100px;
  max-width: 800px;
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
  z-index: 9;
  gap: 1rem;
  
  display: flex;
  align-items: center;
  margin-left: 3rem;
  
  .dropdowns {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
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
