import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  height: 3rem;
  border-radius: 0.25rem;
  align-items: center;

  &:hover {
    background-color: blueviolet;
    cursor: pointer;
    color: #ffffff;
  }

  & svg {
    height: 1.5rem;
    margin-right: 10px;
  }
`;
