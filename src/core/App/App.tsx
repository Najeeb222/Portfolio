import { ThemeProvider } from "@mui/material";
import { MotionConfig } from "motion/react";
import AppRouter from "../Routes/Routes";
import { theme } from "../theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Respects the visitor's OS "reduce motion" setting */}
      <MotionConfig reducedMotion="user">
        <AppRouter />
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;
