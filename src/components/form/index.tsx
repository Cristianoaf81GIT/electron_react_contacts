import { FieldProps, FormComponentsProps } from "./types";
import { FormComponents } from "./form";

export function Field({ props, type }: FieldProps): JSX.Element {
  const Component = FormComponents[type as keyof FormComponentsProps];
  return <Component {...props} />;
}
