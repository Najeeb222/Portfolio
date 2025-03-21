import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AnimatedText from "../AnimatedText/AnimatedText";
import { CardWrapper, CustomButton, FindWithMe } from "@components/index";
import { COLORS } from "@constants/color";

const Header = () => {
  return (
    <Container component={"section"} maxWidth="lg" disableGutters  sx={{ p: {md:3,xs:'5px'},mt:'80px', }}>
      <Grid container mt={2} display={'flex'} spacing={4}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            gap:'20px'
          }}
          

        >
          <Stack gap={"20px"}>
            <Typography
              variant="body2"
              sx={{ letterSpacing: {md:'3px',sm:'2px',xs:'1px'}, textTransform: "uppercase" }}
            >
              Welcome to my world
            </Typography>
            <AnimatedText />
            <Typography color={COLORS.bodyWhite} variant="body1" pr={{md:'135px',xs:0}}>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </Typography>
          </Stack>
          <Box sx={{justifyContent:'space-between',display:'flex',flexDirection:{xs:'column',sm:'row',gap:'20px'}}} >
            <FindWithMe />
            <Stack gap={"20px"}  width={"50%"}>
              <Typography
                variant="body2"
                sx={{ fontWeight: "500", letterSpacing: "2px" }}
              >
                BEST SKILL ON
              </Typography>
              <Stack direction={"row"} gap={"10px"}>
                <CustomButton
                  icon={
                    <img
                      src="assets/icons/in.png"
                      width={"24px"}
                      height={"24px"}
                      style={{ objectFit: "cover" }}
                    />
                  }
                />
                <CustomButton
                  icon={
                    <img
                      src="assets/icons/diamond.png"
                      alt="Logo"
                      width={"24px"}
                      height={"24px"}
                    />
                  }
                />
                <CustomButton
                  icon={
                    <img
                      src="assets/icons/figma.png"
                      width={"24px"}
                      height={"24px"}
                    />
                  }
                />
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          position={"relative"}
          sx={{ padding: 0, ml: "auto " }}
        >
          <Box
            component={"img"}
            src="assets/images/MyProfile.png"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",

              bottom: "0",
              zIndex: -3333,
            }}
          >
            <CardWrapper height={{md:'350px',sm:'550px',xs:'400px'}} width={{md:'385px',sm:'600',xs:'300px'}} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
