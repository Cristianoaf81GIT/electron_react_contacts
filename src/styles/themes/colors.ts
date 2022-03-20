import { yellow, blueGrey } from '@mui/material/colors';
import { TMaterialColors } from './types';

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
  green: {
    main: '#78c2ad',
    light: '#9bd2c2',
    dark: '#66baa2',
    contrastText: '#ffffff' 
  },
  red: {
    main: '#f3969a',
    light: '#f8c4c6',
    dark: '#f07f84',
    contrastText: '#ffffff' 
  },
};