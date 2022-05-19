import styled from "styled-components";

export const Wrapper = styled.div``;

export const Label = styled.label`
  cursor: pointer;
`;

export const Span = styled.label`
  padding: 0.25rem 0.5rem;
  border: 2px solid black;
  border-radius: 1rem;
`;

export const RadioButton = styled.input`
  display: none;

  &:checked + ${Span} {
    border: 2px solid blueviolet;
    background: blueviolet;
    color: white;
  }
`;
