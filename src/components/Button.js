import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ big }) => (big ? "1.2em" : "1.1em")};
  font-weight: 500;
  border-radius: 30px;
  white-space: nowrap;
  border: none;
  outline: none;
  padding: ${({ big }) => (big ? "14px 48px" : "14px 30px")};
  text-align: center;
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  transition: 0.5 ease-in-out;
  cursor: pointer;

  &:hover {
    transition: 0.5 ease-in-out;
    color: ${({ primary }) => (primary ? "#01bf71" : "#000")};
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
  }
`;
