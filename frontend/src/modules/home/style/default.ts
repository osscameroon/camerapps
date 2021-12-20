import styled from "styled-components";
import {size} from "../../../constants";

export const HomeWrapper = styled.div`

  .home-list__container {
    position: relative;
    min-height: 400px;
    display: flex;
    flex-grow: 1;
  }

  @media (max-width: ${size.tablet}) {
    .home-list__container {
      flex-direction: column;
      width: 100%;
    }
  }
`;