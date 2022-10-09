import styled from "styled-components";
import {size} from "../../../../constants";

export const AppFormUIWrapper = styled.form`
  padding: 2em;
  width: 100vw;
  overflow-y: scroll;
  z-index: 3;
  padding-bottom: 4rem;

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
    
    position: fixed;
    bottom: 5.5rem;
    
    background-color: ${({theme}) => theme.white};
    width: 100%;
    left: 0;
    
    padding-left: 2rem;
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

  .error-message {
    color: red;
    font-size: .8em;
    display: block;
    margin-top: .3rem;
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
