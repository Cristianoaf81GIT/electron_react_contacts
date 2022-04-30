import React from "react";
import { SnackBarContextValues } from "./types";

export const SnackBarContext = React.createContext<SnackBarContextValues>({
  open: false,
  setOpen: (): void => void 0,
  message: "",
  setMessage: (): void => void 0,
});