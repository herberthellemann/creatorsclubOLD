import styled from "styled-components";

export const TArea = styled.textarea`
  width: 100%;
  resize: none;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.75rem;
  text-indenttt: 40px;
  border: 2px solid black;
  border-radius: 4px;
  outline: none;
  margin: 0;

  &:focus {
    border: 2px solid blueviolet;
  }
`;
