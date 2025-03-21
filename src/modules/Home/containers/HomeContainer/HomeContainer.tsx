import { AppLayout } from "@layouts/index";
import {
  Client,
  ContactWithMe,
  Features,
  Footer,
  Header,
  MyBlog,
  MyPortfolio,
  MyResume,
  Pricing,
  Testimonial,
} from "@modules/Home/components";
import { Divider, Stack } from "@mui/material";
const HomeContainer = () => {
  return (
    <AppLayout>
      <Stack gap={'100px'} px={{md:0,xs:'15px'}}>
        <Header />
        <Divider />
        <Features />
        <Divider />
        <MyPortfolio />
        <Divider />
        <MyResume />
        <Divider />
        <Testimonial />
        <Divider />
        <Client />
        <Divider />
        <Pricing />
        <Divider />
        <MyBlog />
        <Divider />
        <ContactWithMe />
        <Divider />
        <Footer />
      </Stack>
    </AppLayout>
  );
};

export default HomeContainer;
