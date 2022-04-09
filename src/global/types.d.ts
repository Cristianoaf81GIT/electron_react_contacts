import { Theme } from "@mui/material";
import { 
  TextFieldProps, 
  ButtonProps, 
  BaseTextFieldProps, 
  CheckboxProps, 
  TableProps, 
  BoxProps, 
  TypographyProps,
  SxProps
} from "@mui/material";
import { string } from "yup";

declare module "@mui/material" {
  declare type fieldTypeValues = "TextField" | "Button" | "Table" | "Checkbox" | "Box" | "Typography" ;
  declare type ButtonVariants = "contained" | "outlined" | "text";
  interface BaseTextFieldProps {
    fieldType?: fieldTypeValues;   
  } 

  interface ButtonProps {
    buttonText?: string;
    fieldType?: fieldTypeValues;
    buttonVariant?: ButtonVariants
  }

  interface TypographyProps {
    fieldType?:fieldTypeValues;
    id?: string;
    name?: string;
    fieldtext?: string;
    TypographyVariant?: 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
    // | string;
    sx?: SxProps<Theme>
  }

  interface BoxProps {
    fieldtext?: string;
    children?: JSX.Element;
    sx?: SxProps<Theme>
    onClick?: (evt?: any) => any;
  }
}

export type TFormSchemaItem = TextFieldProps 
& BaseTextFieldProps 
& CheckboxProps 
& TableProps 
& ButtonProps & TypographyProps;

