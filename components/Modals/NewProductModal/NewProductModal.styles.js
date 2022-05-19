import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
`;

export const Left = styled.div`
  width: 100%;
`;

export const Right = styled.div`
  width: 100%;
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0.5rem 0;
`;

export const PillGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  grid-column-gap: 1rem;
  margin: 1rem 0;
`;
