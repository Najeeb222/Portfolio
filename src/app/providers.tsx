"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { MotionConfig } from "motion/react";
import { theme } from "../core/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
