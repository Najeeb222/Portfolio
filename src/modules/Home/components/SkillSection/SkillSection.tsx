import { COLORS } from "@constants/color";

import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";

interface Skill {
  title: string;
  value: number;
}

interface SkillSectionProps {
  skills: Skill[];
  title: string;
}

const SkillSection: React.FC<SkillSectionProps> = ({
  skills,
  title,
}: SkillSectionProps) => {

  return (
    <Grid item sm={6} xs={12} sx={{ mb: "20px" }}>
      <Stack sx={{ gap: "15px", mb: "20px" }}>
        <Typography
          variant="body2"
          sx={{ letterSpacing: "2px", fontWeight: 500, color: COLORS.subtitle }}
    
        >
          Features
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: COLORS.bodyWhite, fontSize: "36px", fontWeight: "700" }}
      
        >
          {title}
        </Typography>
      </Stack>

      {skills.map((skill, index) => (
        <div
        key={index}
   
        >
          <Box mb={2} key={index}>
            <Typography variant="body2" sx={{ mb: "10px" }} 
            >
              {skill.title}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              sx={LinearProgressStyles}
            />
          </Box>
        </div>
      ))}
    </Grid>
  );
};

export default SkillSection;

const LinearProgressStyles = {
  backgroundColor: COLORS.border,
  border: `2px solid ${COLORS.lightn}`,
  height: 13,
  width: "100%",
  borderRadius: "8px",
  "& .MuiLinearProgress-bar": {
    background: `linear-gradient(145deg, ${COLORS.white} 10%, ${COLORS.primary} 100%)`,
    borderRadius: "8px",
  },
};
