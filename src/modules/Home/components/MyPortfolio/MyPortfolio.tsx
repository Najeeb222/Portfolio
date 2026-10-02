import { Container, Grid } from "@mui/material";
import { useState } from "react";
import {
  CustomCard,
  ProjectDialog,
  Reveal,
  SectionHeading,
} from "@components/index";
import { portfolioData, type Project } from "@constants/data";

const MyPortfolio = () => {
  // Kept separate from `open` so the dialog content stays visible while it animates closed
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <Container maxWidth="lg" disableGutters component={"section"} id="portfolio">
      <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
      <Grid container spacing={3}>
        {portfolioData.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <Reveal delay={(index % 3) * 0.1} style={{ height: "100%" }}>
              <CustomCard project={item} onOpen={handleOpen} />
            </Reveal>
          </Grid>
        ))}
      </Grid>

      <ProjectDialog
        project={selected}
        open={open}
        onClose={() => setOpen(false)}
        onExited={() => setSelected(null)}
      />
    </Container>
  );
};

export default MyPortfolio;
