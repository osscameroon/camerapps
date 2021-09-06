import styled from "styled-components";

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
      
      span {
        margin-left: 5px;
      }
      
      &:hover {
        text-decoration: underline;
      }
    }
    
    .btn-adder__icon {
      font-size: 1.3em;
    }
  }
`;