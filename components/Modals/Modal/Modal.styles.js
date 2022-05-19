import styled from "styled-components";

export const DarkBG = styled.div`
  /*background-color: rgba(0, 0, 0, 0.5);*/
  background-color: blueviolet;
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  border-radius: 0.5rem;
  background-color: white;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  border-bottom: 1px solid #d4d4d8;

  & svg:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;

export const Body = styled.div`
  padding: 1rem 1rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: 1rem 1rem;
  border-top: 1px solid #d4d4d8;
  background-color: #fafafa;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-right: 2rem;
  margin-top: 0;
  margin-bottom: 0;
`;
