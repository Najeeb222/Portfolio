import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AnimatedText from "../AnimatedText/AnimatedText";
import { FindWithMe, CardWrapper } from "@components/index";
import { COLORS } from "@constants/color";

const Header = () => {
  return (
    <Container
      id="home"
      component="section"
      maxWidth="lg"
      disableGutters
      sx={{ p: { md: 3, xs: "5px" }, mt: "80px" }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* RIGHT SIDE (Profile Image + CardWrapper) on small screens first */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{ position: "relative", order: { xs: 1, md: 2 } }}
        >
          {/* CardWrapper behind image */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              width: "100%",
              height: "75%",
            }}
          >
            <CardWrapper height="100%" width="100%" />
          </Box>


          <Box
            component="img"
            src="assets/images/MyProfile.png"
            alt="Najeeb Ullah"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              position: "relative",
              zIndex: 2,
            }}
          />
        </Grid>


        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            order: { xs: 2, md: 1 },
          }}
        >
          <Stack gap="20px">
            <Typography
              variant="body2"
              sx={{
                letterSpacing: { md: "3px", sm: "2px", xs: "1px" },
                textTransform: "uppercase",
                // color: COLORS.primary,
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
            >
              Welcome to my world
            </Typography>


            <AnimatedText />


            <Typography
              color={COLORS.bodyWhite}
              variant="body1"
              pr={{ md: "135px", xs: 0 }}
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
              }}
            >
              I’m a passionate web developer specializing in{" "}
              <strong style={{ color: COLORS.primary }}>
                modern, user-friendly applications
              </strong>{" "}
              with clean code and creative solutions.
            </Typography>
          </Stack>

          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "20px",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <FindWithMe />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
