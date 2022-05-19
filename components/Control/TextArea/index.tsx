// TextArea component

import { ChangeEventHandler } from "react";
import { TArea } from "./TextArea.styles";

type TextAreaProps = {
  placeholder?: string;
  rows?: number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

export default function Input({ placeholder, rows, onChange }: TextAreaProps) {
  return (
    <TArea
      placeholder={placeholder}
      rows={rows ? rows : 2}
      onChange={onChange}
    />
  );
}
