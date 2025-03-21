import {  Container } from "@mui/material";
import * as React from "react";
import { Navbar } from "..";


const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth={false} disableGutters sx={{ overflow: "hidden" }}>
      <Navbar/>
      {children}
    </Container>
  );
};

export default AppLayout;
