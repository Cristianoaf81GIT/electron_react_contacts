import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
import { SPACING } from './spacing';

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
    extraColors: {
      blueGrey: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      },
    }
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
    extraColors: {
      blueGrey?: {
        main?: string;
        light?: string;
        dark?: string;
        contrastText?: string;
      },
    }
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
    },
  },
  extraColors: {
    blueGrey: {
      main: colors.blueGrey.main,
      light: colors.blueGrey.light,
      dark: colors.blueGrey.dark,
      contrastText: colors.blueGrey.contrastText
    },
  },
  components: {
    MuiButton: {   
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        style: {
          borderRadius: SPACING[2],
          minHeight: SPACING[40],
          boxShadow: `${SPACING[2]}px ${SPACING[2]}px ${colors.blueGrey.light}`          
        }       
      },      
    },
    MuiCard: {
      defaultProps: {
        style: {
          borderRadius: SPACING[2],         
        }
      }
    },
    MuiInputBase: {
      defaultProps: {        
        style: {
          borderRadius: SPACING[8],
          height: SPACING[40],
          padding: SPACING[0],
          borderWidth: SPACING[1],
          minHeight: SPACING[40],            
        }
      },
      styleOverrides: {
        fullWidth: true,        
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",        
      }
    },
    
  }
});


export {
  main,
};
