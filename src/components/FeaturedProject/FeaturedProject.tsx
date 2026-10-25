import CustomButton from "@components/CustomButton/CustomButton";
import { COLORS } from "@constants/color";
import type { Project } from "@constants/data";
import { shadows } from "@constants/shadow";
import { ArrowForward, NorthEast } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
  reverse?: boolean; // Puts the screenshot on the right
};

const hostOf = (url: string) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

// Large showcase row: framed screenshot on one side, story + actions on the other
const FeaturedProject = ({ project, onOpen, reverse }: Props) => {
  const { image, category, title, description, tech, status, link, linkLabel } = project;

  return (
    <Box
      sx={{
        p: { xs: "16px", md: "28px" },
        borderRadius: "16px",
        background: COLORS.gradients.gradientBoxW,
        boxShadow: shadows.shadowWhite3,
        "& .shot": { transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)" },
        "&:hover .shot": { transform: "scale(1.03)" },
      }}
    >
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
        {/* Screenshot in a browser frame */}
        <Grid item xs={12} md={7} sx={{ order: { md: reverse ? 2 : 1 } }}>
          <Box
            component="button"
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`View details for ${title}`}
            aria-haspopup="dialog"
            sx={{
              all: "unset",
              display: "block",
              width: "100%",
              cursor: "pointer",
              borderRadius: "12px",
              overflow: "hidden",
              background: COLORS.white,
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 18px 40px -20px rgba(30, 33, 37, 0.35)",
              "&:focus-visible": { outline: `2px solid ${COLORS.primary}`, outlineOffset: "4px" },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap="6px"
              sx={{ px: "14px", py: "10px", background: "#f1f3f5", borderBottom: `1px solid ${COLORS.border}` }}
            >
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
              <Typography
                sx={{
                  ml: "10px",
                  px: "12px",
                  py: "2px",
                  borderRadius: "6px",
                  background: COLORS.white,
                  fontSize: "12px",
                  color: COLORS.body,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {hostOf(link)}
              </Typography>
            </Stack>
            <Box sx={{ overflow: "hidden", position: "relative", aspectRatio: "16 / 10" }}>
              <Image className="shot" src={image} alt={`${title} screenshot`} fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "top" }} />
            </Box>
          </Box>
        </Grid>

        {/* Story */}
        <Grid item xs={12} md={5} sx={{ order: { md: reverse ? 1 : 2 } }}>
          <Stack gap="16px">
            <Stack direction="row" alignItems="center" gap="10px" flexWrap="wrap">
              <Typography
                sx={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", color: COLORS.primary }}
              >
                {category}
              </Typography>
              {status && (
                <Box
                  sx={{
                    px: "10px",
                    py: "2px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#9a5b00",
                    background: "#fff1d6",
                  }}
                >
                  {status}
                </Box>
              )}
            </Stack>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "24px", md: "30px" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: COLORS.headingWv,
              }}
            >
              {title}
            </Typography>

            <Typography sx={{ fontSize: "16px", lineHeight: 1.75, color: COLORS.bodyWhite }}>
              {description}
            </Typography>

            <Stack direction="row" gap="8px" flexWrap="wrap">
              {tech.map((t) => (
                <Box
                  key={t}
                  sx={{
                    px: "12px",
                    py: "5px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: COLORS.headingWv,
                    background: COLORS.white,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  {t}
                </Box>
              ))}
            </Stack>

            <Stack direction="row" gap="12px" flexWrap="wrap" sx={{ mt: "8px" }}>
              <CustomButton
                variant="primary"
                title="View Details"
                fontsize="15px"
                height="48px"
                onClick={() => onOpen(project)}
                icon={<ArrowForward sx={{ fontSize: "18px" }} />}
              />
              <CustomButton
                title={linkLabel ?? "Live Site"}
                fontsize="15px"
                height="48px"
                hover
                href={link}
                icon={<NorthEast sx={{ fontSize: "16px" }} />}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedProject;
