import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  background: #f4f4f5;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  color: #000000;
  border-bottom: 1px solid #000000;
`;

export const TitleContainer = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;

export const AccountArea = styled.div`
  display: flex;
  direction: row;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;
`;

export const Avatar = styled.div`
  height: 36px;
  width: 36px;
  background: #f472b6;
  border: 1px solid #ffffff;
  border-radius: 18px;
  margin: 0rem 1rem;
  position: relative;
  overflow: hidden;
`;

export const LogInButton = styled.div`
  font-size: 0.75rem;
  color: #000000;
  width: auto;
  height: auto;
  border: 1px solid #000000;
  border-radius: 0.25rem;
  align-items: center;
  background: transparent;
  padding: 0.5em 1em;

  &:hover {
    background-color: #000000;
    border-color: #000000;
    cursor: pointer;
    color: #ffffff;
  }
`;
