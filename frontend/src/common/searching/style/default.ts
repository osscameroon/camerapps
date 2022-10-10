import styled from "styled-components";
import {size} from "../../../constants";

export const SearchingWrapper = styled.form<{visible?: boolean}>`
  min-height: 50px;
  min-width: 100px;
  max-width: 800px;
  background-color: transparent;
  border-radius: 5px;
  z-index: 9;
  gap: 1rem;
  
  display: flex;
  align-items: center;
  margin: 0 3rem;
  
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
    //width: 100%;
    top: 0;
    box-shadow: none;
    //background-color: #f1f1f1;
    
    flex-direction: column;
    justify-content: center;
    
    min-height: 100px;
    border-radius: 0;
    padding: 0;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    
    .dropdowns {
      width: 100%;
    }
  }
  
  @media (max-width: ${size.tablet}) {
    margin: 0 2rem;
  }
`;
