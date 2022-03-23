import { 
  TextFieldProps, 
  ButtonProps, 
  BaseTextFieldProps, 
  CheckboxProps, 
  TableProps } from "@mui/material";
import { string } from "yup";

declare module "@mui/material" {
  declare type fieldTypeValues = "TextField" | "Button" | "Table";
  interface BaseTextFieldProps {
    fieldType?: fieldTypeValues;
  }

  interface ButtonProps {
    buttonText?: string;
  }
}

export type TFormSchema =  Array< 
ButtonProps | 
TextFieldProps | 
BaseTextFieldProps | 
CheckboxProps | 
TableProps>;

export type TFormSchemaItem = Record<string, any>;

