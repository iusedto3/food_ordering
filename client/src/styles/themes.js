import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', // Màu cam đậm cho food
    },
    secondary: {
      main: '#ff9800', // Màu cam nhạt
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
  },
});

export default theme;