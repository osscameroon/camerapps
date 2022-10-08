import styled from "styled-components";
import {size} from "../../../../constants";

export const AppFormUIWrapper = styled.form`
  padding: 2em;
  width: 100vw;
  //height: calc(100vh - 60px - 65px);
  overflow-y: scroll;
  z-index: 3;

  h2 {
    font-size: 2.3em;
    margin-bottom: .2em;
  }

  p {
    width: 50%;
  }
  
  .m-top {
    margin-top: 1em;
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .section-block {
    margin-bottom: 2em;

    h3 {
      font-size: 1.9em;
      margin-bottom: .5em;
    }

    .basic-form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    
    .basic, .basic-form {
      border-radius: 10px;
    }
  }
  
  @media(max-width: ${size.tablet}) {
    padding: 1rem;
  }
  
  @media(max-width: ${size.mobileL}) {
    .section-block {
      .basic-form {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
