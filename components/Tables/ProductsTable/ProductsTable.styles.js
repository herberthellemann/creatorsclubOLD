import styled from "styled-components";

export const TWrapper = styled.div`
  width: 100%;
`;

export const TTable = styled.table`
  width: 100%;
  text-align: left;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 1px solid #000000;
  border-spacing: 0;
  table-layout: auto;
`;

export const THead = styled.thead`
  width: 100%;
  position: sticky;
  z-index: 3;
`;

export const THeadRow = styled.tr`
  width: 100%;
  background: #ffffff;
  border: 0px;
`;

export const THeadH = styled.th`
  padding: 1rem 1rem;
  border-bottom: 1px solid #d4d4d8;
  font-size: 0.8rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const TBody = styled.tbody`
  width: 100%;
`;

export const TBodyRow = styled.tr`
  widht: 100%;
  height: 60px;

  &:hover {
    background-color: #faf5ff;
  }
`;

export const TCell = styled.td`
  padding: 0.75rem 1rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: auto;

  & svg {
    height: 1.25rem;
    margin-right: 0.75rem;
    cursor: pointer;
    color: black;
  }

  & svg:hover {
    transform: scale(1.25);
  }

  & a {
    color: blueviolet;
    text-decoration: underline;
  }
`;

export const TCellRight = styled(TCell)`
  text-align: right;
`;

export const TCellWide = styled.td`
  padding: 0.75rem 1rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  max-width: 1px;
`;

export const Pill = styled.div`
  color: blueviolet;
  border: 1px solid blueviolet;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 400;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 44px;
  height: 44px;
  border: 1px solid #e4e4e7;
  border-radius: 4px;
  position: relative;
`;
