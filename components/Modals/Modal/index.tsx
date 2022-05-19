// Modal skeleton

import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { DarkBG, Container, Header, Body, Footer, Title } from "./Modal.styles";
import { DismissCircle } from "@styled-icons/fluentui-system-filled";
import Button from "../../Control/Button";

type ModalProps = {
  title: string;
  buttonLabel: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({
  title,
  buttonLabel,
  setIsOpen,
  children,
  handleClick,
}: ModalProps) => {
  return (
    <>
      <DarkBG>
        <Container>
          <Header>
            <Title>{title}</Title>
            <DismissCircle size={24} onClick={() => setIsOpen(false)} />
          </Header>
          <Body>{children}</Body>
          <Footer>
            <Button
              title={buttonLabel}
              color={"black"}
              handleClick={handleClick}
            />
          </Footer>
        </Container>
      </DarkBG>
    </>
  );
};

export default Modal;
