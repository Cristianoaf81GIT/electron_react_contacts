import { TFormSchema } from "../../../global/types";
import * as Yup from "yup";

export const formInitialValues = { "login-email": "", "login-password": "" };

export const LoginSchema: TFormSchema = [
  {
    id: "01",
    name: "login-email",
    label: "e-mail",
    fieldType: "TextField",
    type: "text",
    fullWidth: true,
    variant: "standard",
    error: false,
    
  },
  {
    id:  "02",
    name: "login-password",
    label: "password",
    fieldType: "TextField",
    type: "password",
    fullWidth: true,
    variant: "standard",
    error: false,
  },
  {
    id:  "02",
    name: "login-btn-login",
    buttonText: "Logar",
    fieldType: "Button",
    type: "submit",
    color: "primary",
    fullWidth: false,    
  },
  {
    id:  "03",
    name: "login-btn-reset",
    buttonText: "Reset",
    fieldType: "Button",
    type: "reset",
    color: "secondary",
    fullWidth: false
  }
]

export const ValidationSchema = Yup.object().shape({
  "login-email": Yup.string()
    .email("erro, e-mail inválido")
    .required("campo obrigatório"),

  "login-password": Yup.string()
    .required("campo obrigatório")
    .min(8, "erro, a senha deve conter ao menos 8 caracteres"),
});

