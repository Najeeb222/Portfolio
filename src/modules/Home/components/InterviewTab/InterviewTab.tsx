import { PortfolioCard } from "@components/index";
import { COLORS } from "@constants/color";
import { useGsapAnimation } from "@hooks/UseGsapAnimation";
import { Container, Grid, Stack, Typography } from "@mui/material";

const InterviewTab = () => {
  const { elementsRef, textRef } = useGsapAnimation();

  return (
    <Container disableGutters>
      <Grid container spacing={{ md: 3, sm: 1.5, xs: 0 }}>
        
        
        <Grid item md={6} mb={2}>
          <Stack sx={{ gap: "15px" }}>
            <Typography
              variant="body2"
              sx={{
                letterSpacing: "2px",
                fontWeight: 500,
                color: COLORS.subtitle,
              }}
              ref={(el) => {
                textRef.current[0] = el;
              }}
            >
              2007 - 2010
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: COLORS.bodyWhite,
                fontSize: { md: "36px", sm: "30px", xs: "24px" },
                fontWeight: "700",
                mb: "35px",
              }}
              ref={(el) => {
                textRef.current[1] = el; 
              }}
            >
              Company Experience
            </Typography>
          </Stack>

          {[1, 2, 3].map((_item, index) => (
            <Stack key={`company-${index}`} sx={{ mb: "30px" }}>
              <div ref={(el) => { elementsRef.current[index] = el; }}> 
                <PortfolioCard />
              </div>
            </Stack>
          ))}
        </Grid>

        {/* Job Experience */}
        <Grid item md={6}>
          <Stack sx={{ gap: "15px" }}>
            <Typography
              variant="body2"
              sx={{
                letterSpacing: "2px",
                fontWeight: 500,
                color: COLORS.subtitle,
              }}
              ref={(el) => {
                textRef.current[2] = el; 
              }}
            >
              2007 - 2010
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: COLORS.bodyWhite,
                fontSize: { md: "36px", sm: "30px", xs: "24px" },
                fontWeight: "700",
                mb: "35px",
              }}
              ref={(el) => {
                textRef.current[3] = el; 
              }}
            >
              Job Experience
            </Typography>
          </Stack>

          {[1, 2, 3].map((_item, index) => (
            <Stack key={`job-${index}`} sx={{ mb: "30px" }}>
              <div ref={(el) => { elementsRef.current[3 + index] = el; }}> 
                
                <PortfolioCard />
              </div>
            </Stack>
          ))}
        </Grid>

      </Grid>
    </Container>
  );
};

export default InterviewTab;
