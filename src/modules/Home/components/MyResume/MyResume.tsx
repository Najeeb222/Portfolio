import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";
import {
  Box,
  Container,
  Stack,
  Tabs,
  Tab,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";
import InterviewTab from "../InterviewTab/InterviewTab";
import SkillSection from "../SkillSection/SkillSection";
import { designSkill, developmentSkill } from "@constants/data";
import { useGsapAnimation } from "@hooks/UseGsapAnimation";

const MyResume = () => {
  const [value, setValue] = useState("Education");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const {textRef}=useGsapAnimation()

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
          7+ Years of Experience
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
          My Resume
        </Typography>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            boxShadow: shadows.shadowWhite3,
          }}
          TabIndicatorProps={{ sx: { display: "none" } }}
          
        >
          <Tab sx={tabStyle} label="Education" value="Education" />
          <Tab
            sx={tabStyle}
            label="Professional Skill"
            value="Professional_Skill"
          />
          <Tab sx={tabStyle} label="Experience" value="Experience" />
          <Tab sx={tabStyle} label="Interview" value="interview" />
        </Tabs>
      </Box>

      <Box sx={{ mt: 3 }}>
        {value === "Education" && <InterviewTab />}
        {value === "Professional_Skill" && (
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <SkillSection title="Design Skill" skills={designSkill} />
              <SkillSection
                title="Development Skill"
                skills={developmentSkill}
              />
            </Grid>
          </Container>
        )}

        {value === "Experience" && <InterviewTab />}
        {value === "interview" && <InterviewTab />}
      </Box>
    </Container>
  );
};

export default MyResume;
const tabStyle = {
  border: "none",
  paddingY: "30px",
  width: { xs: "100%", sm: "25%" },
  fontWeight: "bold",
  background: "transparent",
  whiteSpace: "nowrap",
  borderRadius: "10px",
  transition: "all 0.3s ease",
  position: "relative",
  color: COLORS.bodyWhite,
  ":hover": {
    background: COLORS.gradients.gradientBoxW,
    color: COLORS.primary,
    boxShadow: shadows.shadowWhite3,
  },
  "&.Mui-selected": {
    boxShadow: shadows.shadowWhite3,
    background: COLORS.gradients.gradientBoxW,
    color: COLORS.primary,
  },
};
