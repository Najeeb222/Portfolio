import { PortfolioCard } from "@components/index";
import { COLORS } from "@constants/color";
import { Container, Grid, Stack, Typography, Box } from "@mui/material";

const InterviewTab = () => {
  return (
    <Container disableGutters sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={{ md: 3, sm: 2, xs: 2 }}>
        {/* Education Section */}
        <Grid item xs={12} md={6} mb={{ xs: 4, md: 2 }}>

          <Typography
            variant="h2"
            sx={{
              color: COLORS.bodyWhite,
              fontSize: { md: "36px", sm: "30px", xs: "24px" },
              fontWeight: "700",
              mb: { xs: "20px", md: "35px" },
              textAlign: { xs: "center", md: "left" }, // ✅ Center on mobile
            }}
          >
            Education
          </Typography>


          <Stack sx={{ gap: "30px", width: "100%" }}>

            <PortfolioCard
              title="Matriculation (Medical)"
              subtitle="Board of Intermediate & Secondary Education (2015 - 2017)"
              description="Completed Matric in the Medical group with a solid foundation in Biology, Chemistry, and Physics, developing analytical and problem-solving skills that built the basis for future studies."
              score="86%"
            />




            <PortfolioCard
              title="FSc (Computer Science)"
              subtitle="Board of Intermediate & Secondary Education (2017 - 2019)"
              description="Focused on Computer Science, Mathematics, and Physics, building a strong base for higher studies in technology."
              score="72%"
            />

          </Stack>
        </Grid>


        <Grid item xs={12} md={6} mb={{ xs: 2, md: 2 }}>

          <Typography
            variant="h2"
            sx={{
              color: COLORS.bodyWhite,
              fontSize: { md: "36px", sm: "30px", xs: "24px" },
              fontWeight: "700",
              mb: { xs: "20px", md: "35px" },
              textAlign: { xs: "center", md: "left" }, // ✅ Center on mobile
            }}
          >
            Job Experience
          </Typography>


          <Stack sx={{ gap: "30px", width: "100%" }}>
            <PortfolioCard
              title="FSc (Computer Science)"
              subtitle="Board of Intermediate & Secondary Education (2017 - 2019)"
              description="Completed FSc in the Computer Science group, gaining knowledge in Mathematics, Physics, and Computer Science, while strengthening logical thinking and problem-solving abilities for higher education."
              score="78%"
            />

            <PortfolioCard
              title="Frontend Developer Internship"
              subtitle="Krytix Solution. (2025 - Present)"
              description="Focused on creating scalable frontend solutions, enhancing user experience with responsive design, and implementing efficient API integrations."
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InterviewTab;
