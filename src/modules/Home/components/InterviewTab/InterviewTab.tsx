import { PortfolioCard } from "@components/index";
import { COLORS } from "@constants/color";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const InterviewTab = () => {


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
             
            >
              Company Experience
            </Typography>
          </Stack>

          {[1, 2, 3].map((_item, index) => (
            <Stack key={`company-${index}`} sx={{ mb: "30px" }}>
              <div > 
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
            
            >
              Job Experience
            </Typography>
          </Stack>

          {[1, 2, 3].map((_item, index) => (
            <Stack key={`job-${index}`} sx={{ mb: "30px" }}>
              <Box> 
                
                <PortfolioCard />
              </Box>
            </Stack>
          ))}
        </Grid>

      </Grid>
    </Container>
  );
};

export default InterviewTab;
