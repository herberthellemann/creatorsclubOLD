import styled from "styled-components";

export const TTable = styled.table`
  width: 100%;
  text-align: left;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 1px solid #000000;
  border-spacing: 0;
`;

export const THead = styled.thead`
  position: sticky;
  z-index: 100;
`;

export const THeadRow = styled.tr`
  background: #ffffff;
  border: 0px;
`;

export const THeadH = styled.th`
  padding: 1rem 1rem;
  border-bottom: 1px solid #d4d4d8;
  font-size: 0.75rem;
`;

export const TBody = styled.tbody``;

export const TBodyRow = styled.tr`
  &:hover {
    background-color: #faf5ff;
  }
`;

export const TCell = styled.td`
  padding: 0.75rem 1rem;
  font-weight: 300;

  & svg {
    height: 1.25rem;
    margin-right: 0.75rem;
    cursor: pointer;
  }

  & svg:hover {
    transform: scale(1.25);
  }
`;

export const Pill = styled.div`
  background: #f472b6;
  color: #ffffff;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 400;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  text-align: center;
`;
