import { FormikContextType } from "formik";
import { TFormSchemaItem } from "../../global/types";

export function addFormSchemaEvents<T>(
  schema: TFormSchemaItem,
  formik: FormikContextType<T>,
  customOnClick?: Function
): TFormSchemaItem {
  schema.onClick = schema.type === "reset" ? formik.resetForm : customOnClick;
  schema.onChange = formik.handleChange;
  schema.value = formik.values[schema.name as keyof unknown];
  schema.error =
    formik.touched[schema.name as keyof unknown] &&
    Boolean(formik.errors[schema.name as keyof unknown]);
  schema.helperText = schema.error
    ? formik.errors[schema.name as keyof unknown]
    : "";
  return schema;
};