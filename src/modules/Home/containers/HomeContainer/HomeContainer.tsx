import { AppLayout } from "@layouts/index";
import {
  ContactWithMe,
  Experience,
  Features,
  Header,
  MyPortfolio,
  MyResume,
  PortfolioLoader,
} from "@modules/Home/components";
import { Divider, Stack } from "@mui/material";

const HomeContainer = () => (
  <>
    <PortfolioLoader />
    <AppLayout>
      <Stack gap={{ xs: "80px", md: "110px" }} px={{ md: 0, xs: "16px" }}>
        <Header />
        <Divider />
        <Features />
        <Divider />
        <MyPortfolio />
        <Divider />
        <Experience />
        <Divider />
        <MyResume />
        <Divider />
        <ContactWithMe />
        <Divider />
      </Stack>
    </AppLayout>
  </>
);

export default HomeContainer;