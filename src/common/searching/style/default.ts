import styled from "styled-components";

export const SearchingWrapper = styled.form`
  height: 50px;
  min-width: 100px;
  max-width: 800px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: -25px;
  border-radius: 10px;
  padding: .3em;
  
  display: flex;
  align-items: center;
  
  box-shadow: 0 1px 1px rgba(0,0,0,0.05),
              0 2px 2px rgba(0,0,0,0.05),
              0 4px 4px rgba(0,0,0,0.05),
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.05);
  
  transform: translateX(-50%);
  left: 50%;
  
  .dropdowns {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
`;