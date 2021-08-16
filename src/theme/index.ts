import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#202124',
    },
    secondary: {
      main: '#303134',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
    },
  },
});

export default theme;