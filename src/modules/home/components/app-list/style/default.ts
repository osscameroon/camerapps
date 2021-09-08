import styled from "styled-components";

export const AppListWrapper = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: calc(4 * 8px);
  grid-auto-flow: dense;
  width: 100%;
  
  padding: 4em 3em;
`;