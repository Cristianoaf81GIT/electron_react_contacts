import { Theme, SxProps } from "@mui/material";
import { FormikContextType } from "formik";
import { TFormSchemaItem } from "../../global/types";

export function addFormSchemaEvents<T>(
  schema: TFormSchemaItem,
  formik: FormikContextType<T>,
  customOnClick?: (evt?: any) => any,
  customSx?: SxProps<Theme> 
): TFormSchemaItem {
  if (schema.type === "reset") schema.onClick = formik.resetForm as any;
  if (customOnClick !== undefined) {     
    schema.onClick = customOnClick;
    
  } 
  schema.onChange = formik.handleChange;
  schema.value = formik.values[schema.name as keyof unknown];
  schema.sx = customSx;
  schema.error =
    formik.touched[schema.name as keyof unknown] &&
    Boolean(formik.errors[schema.name as keyof unknown]);
  schema.helperText = schema.error
    ? formik.errors[schema.name as keyof unknown]
    : "";
  return schema;
};