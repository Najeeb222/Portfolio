import { Container, Grid, Stack, Typography } from "@mui/material";
import { CustomCard } from "@components/index";
import { COLORS } from "@constants/color";
import { useGsapAnimation } from "@hooks/UseGsapAnimation";

const MyPortfolio = () => {
  const { elementsRef, textRef } = useGsapAnimation(); // Use the hook

  return (
    <Container maxWidth="lg" disableGutters>
      <Stack sx={{ textAlign: "center", gap: "15px" }}>
        <Typography
          variant="body2"
          sx={{ letterSpacing: "2px", fontWeight: 500, color: COLORS.subtitle }}
          ref={(el) => {
            textRef.current[0] = el;
          }}
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
          ref={(el) => {
            textRef.current[1] = el;
          }}
        >
          My Portfolio
        </Typography>
      </Stack>

      {/* Cards Section */}
      <Grid container spacing={4}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <Grid item key={index} md={4} sm={6} xs={12}>
            <div ref={(el) => { elementsRef.current[index] = el; }}>
              <CustomCard favorites={true} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyPortfolio;
