import { TFormSchemaItem } from "../../../global/types";
import * as Yup from "yup";

export const formInitialValues = { "login-email": "", "login-password": "", "login-fullname": "" };

export const LoginSchema: TFormSchemaItem[] = [
  {
    id: "00",
    name: "login-fullname",
    label: "full name",
    fieldType: "TextField",
    type: "text",
    fullWidth: true,
    variant: "standard",
    error: false,    
  },
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
    buttonVariant: "contained",    
  },
  {
    id:  "03",
    name: "login-btn-reset",
    buttonText: "Limpar",
    fieldType: "Button",
    type: "reset",
    color: "secondary",
    fullWidth: false,
    buttonVariant: "contained"
  },
  {
    id: "04",
    name: "login-account-question",
    fieldType: "Typography",
    fieldtext: "Não possui conta?",
    TypographyVariant: "body1",
  },
  {
    id: "05",
    name: "login-account-link",
    fieldType: "Box",
    fieldtext: "Criar conta",    
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

