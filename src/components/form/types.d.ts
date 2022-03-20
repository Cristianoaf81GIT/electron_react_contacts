import { ButtonProps, TextFieldProps } from "@mui/material"

export declare interface FormComponentsProps {
  Button: (props: ButtonProps) => JSX.Element,
  TextField: (props: TextFieldProps) => JSX.Element
}

export interface FieldProps {
  props: ButtonProps & TextFieldProps
  type: string;
}