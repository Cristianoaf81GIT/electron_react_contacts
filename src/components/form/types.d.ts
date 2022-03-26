import { BaseTextFieldProps } from "@mui/material";
import { TypographyProps } from "@mui/material";
import { 
  ButtonProps, 
  TextFieldProps, 
  TableProps, 
  CheckboxProps, 
  BoxProps 
} from "@mui/material";
import { TFormSchemaItem } from "../../global/types";

export declare interface FormComponentsProps {
  Button: (props: ButtonProps) => JSX.Element,
  TextField: (props: TextFieldProps) => JSX.Element
  Checkbox: (props: CheckboxProps) => JSX.Element
  Box: (props: BoxProps) => JSX.Element
  Table: (props: TableProps) => JSX.Element
  Typography: (props: TypographyProps) => JSX.Element
}

export type AnyMuiFieldProps = ButtonProps 
  | TextFieldProps 
  | BoxProps 
  | TableProps 
  | BaseTextFieldProps 
  | CheckboxProps 
  | TypographyProps
  | any;

export interface FieldProps {
  props: TFormSchemaItem 
}
