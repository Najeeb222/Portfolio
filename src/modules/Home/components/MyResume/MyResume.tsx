import { CardWrapper, Reveal, SectionHeading } from "@components/index";
import { developmentSkill } from "@constants/data";
import { Container } from "@mui/material";
import SkillSection from "../SkillSection/SkillSection";

// Skills section (experience now lives in its own section)
const MyResume = () => {
  return (
    <Container maxWidth="lg" disableGutters component={"section"} id="skills">
      <SectionHeading eyebrow="Skills" title="My Skills" />
      <Reveal>
        <CardWrapper width="100%" height="auto" p={{ md: "24px", xs: "8px" }}>
          <SkillSection skills={developmentSkill} />
        </CardWrapper>
      </Reveal>
    </Container>
  );
};

export default MyResume;
