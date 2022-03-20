import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    common: {
      black: string;
      white: string;
    },
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    common?: {
      black?: string;
      white?: string;
    },
    primary?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    },
    secondary?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    },   
  }
}

const main = createTheme({
  common: {
    black: colors.black.dark,
    white: '#ffffff'
  },
  palette: {
    primary: {
      main: colors.green.main,
      light: colors.green.light,
      dark: colors.green.dark,
      contrastText: colors.green.contrastText
    },
    secondary: {
      main: colors.red.main,
      light: colors.red.light,
      dark: colors.red.dark,
      contrastText: colors.red.contrastText
    }
  },
  components: {
    MuiButton: {   
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        style: {
          borderRadius: 2,
          minHeight: 38,
          boxShadow: `2px 2px ${colors.blueGrey.light}`          
        }       
      },      
    },
    MuiCard: {
      defaultProps: {
        style: {
          borderRadius: 2,         
        }
      }
    },
    MuiInputBase: {
      defaultProps: {        
        style: {
          borderRadius: 2,
          height: 40,
          padding: 0,
          borderWidth: 1,
          minHeight: 38,            
        }
      },
      styleOverrides: {
        fullWidth: true,        
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined"
      }
    }
  }
});

export {
  main,
};
