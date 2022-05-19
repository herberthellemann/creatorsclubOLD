// Pill as radio button component

import { ChangeEventHandler } from "react";
import { RadioButton, Label, Span } from "./Pill.styles";

type PillProps = {
  value: string;
  label: string;
  groupName: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export default function Pill({ value, label, groupName, onChange }: PillProps) {
  return (
    <Label>
      <RadioButton
        type="radio"
        value={value}
        name={groupName}
        id={value}
        onChange={onChange}
      />
      <Span htmlFor={value}>{label}</Span>
    </Label>
  );
}
