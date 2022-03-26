import { FieldProps, FormComponentsProps, AnyMuiFieldProps } from "./types";
import { FormComponents } from "./form";

export function FormElement({ props }: FieldProps): JSX.Element {
  const { fieldType } = props;
  const Field = FormComponents[fieldType as keyof FormComponentsProps];
  return <Field {...(props as AnyMuiFieldProps)} />;
}
