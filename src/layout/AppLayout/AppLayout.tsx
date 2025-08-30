import { Container } from "@mui/material";
import * as React from "react";
import { Footer, Navbar } from "..";


const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth={false} disableGutters sx={{ overflow: "hidden" }}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default AppLayout;
