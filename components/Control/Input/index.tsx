// Input component

import { ChangeEventHandler } from "react";
import { StyledIcon } from "@styled-icons/styled-icon";
import { Wrapper, IconContainer, TextField } from "./Input.styles";

type InputProps = {
  type?: string;
  placeholder: string;
  required: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  icon?: StyledIcon;
};

export default function Input({
  type,
  placeholder,
  required,
  onChange,
  icon: Icon,
}: InputProps) {
  function onChangeAdjusted() {
    onChange;
  }
  return (
    <Wrapper>
      <IconContainer>{Icon ? <Icon size="24" /> : null}</IconContainer>
      <TextField
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        icon={Icon}
        step="0.01"
      />
    </Wrapper>
  );
}
