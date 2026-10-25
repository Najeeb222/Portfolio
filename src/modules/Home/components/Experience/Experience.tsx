import { Reveal, SectionHeading } from "@components/index";
import { Container } from "@mui/material";
import InterviewTab from "../InterviewTab/InterviewTab";

// Work experience + education timeline as its own section
const Experience = () => {
  return (
    <Container maxWidth="lg" disableGutters component={"section"} id="experience">
      <SectionHeading eyebrow="1+ Years of Experience" title="My Experience" />
      <Reveal>
        <InterviewTab />
      </Reveal>
    </Container>
  );
};

export default Experience;
