import styled from "styled-components";
import {size} from "../../../../../constants";

export const SearchInputWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  padding: .6rem 0;
  border-radius: 5px;

  background-color: ${({theme}) => theme.secondary};
  border: 2px solid ${({theme}) => theme.borderColor};

  button {
    border: none;
    background-color: transparent;
  }
  
  .search--icon {
    margin-left: 1rem;
  }

  .search {
    height: 90%;
    width: 100%;
    margin-left: 10px;
    outline: none;
    border: none;
    background-color: transparent;
    
    font-size: 1em;
    color: #666;
  }
  
  @media (max-width: 900px) {
    width: 100%;
  }
`;
