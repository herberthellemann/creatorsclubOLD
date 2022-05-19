import styled from "styled-components";

export const Wrapper = styled.button`
  font-size: 1rem;
  color: ${(props) => props.color || "blueviolet"};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: 3rem;
  border: 2px solid ${(props) => props.color || "blueviolet"};
  border-radius: 0.25rem;
  align-items: center;
  background: transparent;
  padding: 0.75em 1em;

  &:hover {
    background-color: ${(props) => props.color || "blueviolet"};
    border-color: ${(props) => props.color || "blueviolet"};
    cursor: pointer;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: "blueviolet";

  & svg {
    margin-right: 0.5rem;
  }
`;
