import styled from "styled-components";
import {size} from "../../../constants";

export const HeaderWrapper = styled.div`
  height: 60px;
  background-color: #000;
  padding: 0 8em;
  
  .header__container {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;
  }

  .actions {
    display: flex;
    align-items: center;
    
    .btn-adder {
      margin-left: 1em;
      text-decoration: none;
      color: #fff;
      
      display: flex;
      align-items: center;
      border: none;
      
      span {
        margin-left: 5px;
      }
      
      &:hover {
        text-decoration: underline;
        background-color: transparent;
        color: #fff;
      }
    }
    
    .btn-adder__icon {
      font-size: 1.3em;
    }
  }
  
  @media (max-width: ${size.tablet}) {
    padding: 0 1em;
    
    .actions {
      
      .btn-adder {
        padding: 0;
        
        span {
          display: none;
        }
      }
    }
  }
  
  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    padding: 0 1em;
    
    .actions {
      
      .btn-adder {
        padding: 0;
        
        span {
          display: none;
        }
      }
    }
  }
`;