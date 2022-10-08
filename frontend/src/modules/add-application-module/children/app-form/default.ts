import styled from "styled-components";

export const AppFormUIWrapper = styled.form`
  padding: 2em;
  width: 100vw;
  height: calc(100vh - 60px - 65px);
  overflow-y: scroll;

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
      padding: 1em;
      background-color: #fafafa;
      border-radius: 10px;
    }

    .personal-form {

    }
  }
`;
