import { createTheme } from "@mui/material";
import { COLORS } from "@constants/color";

const headingFont = 'var(--font-montserrat), sans-serif';

export const theme = createTheme({
  palette: {
    primary: { main: COLORS.primary },
    text: { primary: COLORS.bodyWhite },
    background: { default: "#ecf0f3" },
  },
  typography: {
    fontFamily: 'var(--font-inter), sans-serif',
    h1: { fontFamily: headingFont },
    h2: { fontFamily: headingFont },
    h3: { fontFamily: headingFont },
    h4: { fontFamily: headingFont },
    h5: { fontFamily: headingFont },
    h6: { fontFamily: headingFont },
    button: { fontFamily: headingFont },
  },
});
