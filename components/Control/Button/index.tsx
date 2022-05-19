// Button component

import { MouseEventHandler } from "react";
import { Wrapper, Content } from "./Button.styles";
import { StyledIcon } from "@styled-icons/styled-icon";

type ButtonProps = {
  title: string;
  fullWidth?: boolean;
  color?: string;
  icon?: StyledIcon;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  title,
  fullWidth,
  color,
  icon: Icon,
  handleClick,
}: ButtonProps) {
  return (
    <Wrapper color={color} onClick={handleClick} type="submit">
      <Content>
        {Icon ? <Icon size="1rem" /> : null}
        <span>{title}</span>
      </Content>
    </Wrapper>
  );
}
