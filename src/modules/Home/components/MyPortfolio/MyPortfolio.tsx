import { Container, Grid, Stack, Typography } from "@mui/material";
import { CustomCard } from "@components/index";
import { COLORS } from "@constants/color";
import { portfolioData } from "@constants/data";


const MyPortfolio = () => {


  return (
    <Container maxWidth="lg" disableGutters component={'section'} id="portfolio">
      <Stack sx={{ textAlign: "center", gap: "15px" }}>
        <Typography
          variant="body2"
          sx={{ letterSpacing: "2px", fontWeight: 500, color: COLORS.subtitle }}

        >
          Visit my portfolio and keep your feedback
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
          My Portfolio
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {portfolioData.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <CustomCard
              image={item.image}
              category={item.category}
              title={item.title}
              link={item.link} // ✅ pass link
            />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default MyPortfolio;
