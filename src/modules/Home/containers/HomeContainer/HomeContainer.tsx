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

  return (
    <>
      {isLoading && (
        <PortfolioLoader onLoadingComplete={() => setIsLoading(false)} />
      )}
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
    </>
  );
};

export default HomeContainer;
