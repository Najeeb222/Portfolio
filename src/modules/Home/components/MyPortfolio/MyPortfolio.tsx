"use client";

import { Box, Container, Stack } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  CustomCard,
  FeaturedProject,
  ProjectDialog,
  Reveal,
  SectionHeading,
} from "@components/index";
import { COLORS } from "@constants/color";
import { portfolioData, projectGroups, type Project } from "@constants/data";
import { EASE_OUT } from "@constants/motion";
import { shadows } from "@constants/shadow";

// The first projects get the large showcase layout on the "All" tab
const FEATURED_COUNT = 2;
const filters = ["All", ...projectGroups] as const;
type Filter = (typeof filters)[number];

const MyPortfolio = () => {
  const [filter, setFilter] = useState<Filter>("All");
  // Kept separate from `open` so the dialog content stays visible while it animates closed
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  const showFeatured = filter === "All";
  const featured = showFeatured ? portfolioData.slice(0, FEATURED_COUNT) : [];
  const gridProjects = showFeatured
    ? portfolioData.slice(FEATURED_COUNT)
    : portfolioData.filter((p) => p.group === filter);

  const countFor = (f: Filter) =>
    f === "All" ? portfolioData.length : portfolioData.filter((p) => p.group === f).length;

  return (
    <Container maxWidth="lg" disableGutters component={"section"} id="portfolio">
      <SectionHeading eyebrow="Portfolio" title="Featured Projects" />

      {/* Filter tabs */}
      <Reveal>
        <Stack
          role="tablist"
          aria-label="Filter projects"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap="10px"
          sx={{ mb: { xs: "32px", md: "48px" } }}
        >
          {filters.map((f) => {
            const active = f === filter;
            return (
              <Box
                key={f}
                component="button"
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                sx={{
                  all: "unset",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  px: { xs: "14px", md: "18px" },
                  py: "9px",
                  borderRadius: "999px",
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  color: active ? COLORS.white : COLORS.bodyWhite,
                  background: active ? COLORS.primary : COLORS.gradients.gradientBoxW,
                  boxShadow: active ? "0 10px 20px -10px rgba(255, 1, 79, 0.7)" : shadows.shadowWhite3,
                  "&:hover": { color: active ? COLORS.white : COLORS.primary },
                  "&:focus-visible": { outline: `2px solid ${COLORS.primary}`, outlineOffset: "3px" },
                }}
              >
                {f}
                <Box
                  component="span"
                  sx={{
                    minWidth: 20,
                    px: "6px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    lineHeight: "18px",
                    textAlign: "center",
                    color: active ? COLORS.primary : COLORS.body,
                    background: active ? COLORS.white : "rgba(0,0,0,0.05)",
                  }}
                >
                  {countFor(f)}
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Reveal>

      {/* Featured showcase (only on "All") */}
      {featured.length > 0 && (
        <Stack gap={{ xs: "24px", md: "32px" }} sx={{ mb: { xs: "24px", md: "32px" } }}>
          {featured.map((project, i) => (
            <Reveal key={project.id}>
              <FeaturedProject project={project} onOpen={handleOpen} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </Stack>
      )}

      {/* Project grid, animates as the filter changes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          gap: { xs: "24px", md: "28px" },
        }}
      >
        <AnimatePresence mode="popLayout">
          {gridProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: EASE_OUT, delay: (i % 3) * 0.06 }}
              style={{ height: "100%" }}
            >
              <CustomCard project={project} onOpen={handleOpen} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>

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
