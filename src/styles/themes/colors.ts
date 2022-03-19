import { yellow, blueGrey, grey} from '@mui/material/colors';
import { TMaterialColors } from '.';

export const colors: TMaterialColors = {
  yellow: {
    main: yellow[700],
    light: yellow[500],
    dark: yellow[800],
    contrastText: '#000000' 
  },
  blueGrey: {
    main: blueGrey[700],
    light: blueGrey[500],
    dark: blueGrey[800],
    contrastText: '#ffffff' 
  },
  black: {
    main: '#333333',
    light: '#3d3d3d',
    dark: '#000000',
    contrastText: '#ffffff' 
  },
};