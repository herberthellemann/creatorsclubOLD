import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 4px;
  margin-bottom: 1rem;

  & svg {
    margin: 0.5rem;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  z-index: 20;
  width: 42px;
  height: 42px;
  margin-left: 2px;
  padding-top: 1px;
  background: transparent;
`;

export const TextField = styled.input`
  z-index: 19;
  width: 100%;
  font-size: 1rem;
  padding-left: 0;
  padding-top: 0.75rem;
  padding-right: 0.75em;
  padding-bottom: 0.75rem;
  text-indenttt: 40px;
  text-indent: ${(props) => (props.icon ? "40px" : "12px")};
  border: 2px solid black;
  border-radius: 4px;
  outline: none;
  margin: 0;

  &:focus {
    border: 2px solid blueviolet;
  }

  &:invalid {
    border: 2px solid red;
  }
`;
