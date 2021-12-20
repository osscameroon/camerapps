import styled from "styled-components";
import {size} from "../../../../../constants";

export const SearchInputWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 90%;
  border-right: 2px solid #ddd;

  button {
    border: none;
    background-color: transparent;
  }

  .search {
    height: 90%;
    width: 100%;
    margin-left: 10px;
    outline: none;
    border: none;
    
    font-size: 1em;
    color: #666;
  }

  @media (max-width: ${size.tablet}) {
    border-right: none;
    width: calc(100% - 20px);
    height: 60px;
  }
`;