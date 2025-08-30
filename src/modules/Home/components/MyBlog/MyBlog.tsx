// import { CustomCard } from "@components/index";
import { COLORS } from "@constants/color";
import { Container, Grid, Stack, Typography } from "@mui/material";

const MyBlog = () => {
  return (
    <Container maxWidth={"lg"} disableGutters>
      <Stack sx={{ textAlign: "center", gap: "15px" }}>
        <Typography
          variant="body2"
          sx={{ letterSpacing: "2px", fontWeight: 500, color: COLORS.subtitle }}
        >
          Visit my blog and keep your feedback
        </Typography>
        <Typography
          variant="h2"
          sx={{
            marginBottom: "30px",
            fontWeight: "700",
            fontSize: { md: "60px", xs: "34px", sm: "40px" },
            color: COLORS.bodyWhite,
          }}
        >
          My Blog
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {[1, 2, 3].map((item) => (
          <Grid item key={item} md={4} sm={6} xs={12}>
            {/* <CustomCard time={true} /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyBlog;
