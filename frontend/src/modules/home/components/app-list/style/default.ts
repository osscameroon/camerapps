import styled from "styled-components";
import {size} from "../../../../../constants";

export const AppViewWrapper = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: calc(4 * 8px);
  grid-auto-flow: dense;
  width: 100%;
  
  padding: 1em 3rem 4rem 3em;

  @media (max-width: ${size.tablet}) {
    width: auto;
    padding: 2em;
  }
`;
