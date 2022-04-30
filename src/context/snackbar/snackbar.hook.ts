import React from "react";
import { SnackBarContext } from "./snackbar.context";
import { SnackBarContextValues } from "./types";

export const useSnackBar = (): SnackBarContextValues => React.useContext(SnackBarContext);