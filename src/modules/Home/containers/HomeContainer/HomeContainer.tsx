import { AppLayout } from "@layouts/index";
import {
  ContactWithMe,
  Features,
  Header,
  MyPortfolio,
  MyResume,
  PortfolioLoader,
} from "@modules/Home/components";
import { Divider, Stack } from "@mui/material";
import { useState } from "react";

const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    // Only render loader while loading
    return <PortfolioLoader onLoadingComplete={() => setIsLoading(false)} />;
  }

  // Render the main content only after loading
  return (
    <AppLayout>
      <Stack gap="100px" px={{ md: 0, xs: "15px" }}>
        <Header />

        <Divider />
        <Features />
        <Divider />
        <MyPortfolio />
        <Divider />
        <MyResume />
        <Divider />
        <ContactWithMe />
        <Divider />
      </Stack>
    </AppLayout>
  );
};

export default HomeContainer;
