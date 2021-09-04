import styled from "styled-components";

export const Donation = styled.a`
  border: 2px solid #fff;
  border-radius: 50px;
  padding: 10px 15px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  text-decoration: none;
  color: #fff;
  background-color: transparent;
  
  transition: all .3s 0s ease-in-out;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;