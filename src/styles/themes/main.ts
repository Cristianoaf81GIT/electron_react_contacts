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
  palette: {
    primary: {
      main: colors.yellow.main,
      light: colors.yellow.light,
      dark: colors.yellow.dark,
      contrastText: colors.yellow.contrastText
    },
    secondary: {
      main: colors.black.main,
      light: colors.black.light,
      dark: colors.black.dark,
      contrastText: colors.black.contrastText
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        style: {
          borderRadius: 1,
          minHeight: 38,          
        }       
      },      
    },
    MuiCard: {
      defaultProps: {
        style: {
          borderRadius: 1,         
        }
      }
    },
    MuiInputBase: {
      defaultProps: {        
        style: {
          borderRadius: 1,
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
