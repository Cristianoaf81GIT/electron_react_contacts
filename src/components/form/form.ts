import { 
  TextField,
  Checkbox,
  Box,
  Table,
 
} from "@mui/material";
import MuiThemedButton from "../button";
import MuiTypography from "../typography";
import MuiBox from "../box";
import { FormComponentsProps } from "./types";


export const FormComponents: FormComponentsProps = {
  Button: MuiThemedButton,
  TextField,
  Box: MuiBox,
  Table,
  Checkbox,
  Typography: MuiTypography,
} 

export default FormComponents;