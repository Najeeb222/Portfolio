import { COLORS } from "@constants/color";
import type { Project } from "@constants/data";
import { shadows } from "@constants/shadow";
import { OpenInFull } from "@mui/icons-material";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
};

const CustomCard = ({ project, onOpen }: Props) => {
  const { image, category, title, tech, status } = project;

  return (
    <Box
      component="button"
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`View details for ${title}`}
      aria-haspopup="dialog"
      sx={{
        all: "unset",
        boxSizing: "border-box",
        cursor: "pointer",
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        "& .card": {
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
        },
        "& .shot": { transition: "transform 0.6s ease" },
        "& .overlay": { transition: "opacity 0.4s ease" },
        "& .pill": { transition: "transform 0.4s ease" },
        "& .title": { transition: "color 0.3s ease" },
        "&:hover .card, &:focus-visible .card": {
          transform: "translateY(-6px)",
          boxShadow: shadows.shadowWhiteHover,
        },
        "&:hover .shot, &:focus-visible .shot": { transform: "scale(1.06)" },
        "&:hover .overlay, &:focus-visible .overlay": { opacity: 1 },
        "&:hover .pill, &:focus-visible .pill": { transform: "translateY(0)" },
        "&:hover .title, &:focus-visible .title": { color: COLORS.primary },
        "&:focus-visible": {
          outline: `2px solid ${COLORS.primary}`,
          outlineOffset: "4px",
        },
      }}
    >
      <Card
        className="card"
        elevation={0}
        sx={{
          height: "100%",
          p: { md: "24px", xs: "18px" },
          border: "none",
          boxShadow: shadows.shadowWhite3,
          background: COLORS.gradients.gradientBoxW,
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <Box
            className="shot"
            component="img"
            src={image}
            alt={title}
            loading="lazy"
            sx={{
              display: "block",
              width: "100%",
              aspectRatio: "16 / 10",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          {status && (
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                px: "10px",
                py: "3px",
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
          {/* Hover overlay with a clear call to action */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(13, 16, 19, 0.55)",
            }}
          >
            <Box
              className="pill"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                px: "18px",
                py: "10px",
                borderRadius: "999px",
                background: COLORS.white,
                color: COLORS.primary,
                fontWeight: 600,
                fontSize: "14px",
                transform: "translateY(10px)",
              }}
            >
              View Details <OpenInFull sx={{ fontSize: "15px" }} />
            </Box>
          </Box>
        </Box>

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            px: 0,
            pb: "0 !important",
            pt: "20px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "1.5px",
              color: COLORS.primary,
            }}
          >
            {category}
          </Typography>

          <Typography
            className="title"
            variant="h4"
            sx={{
              fontSize: { md: "21px", xs: "19px" },
              fontWeight: 700,
              lineHeight: 1.35,
              color: COLORS.headingWv,
            }}
          >
            {title}
          </Typography>

          <Stack direction="row" gap="6px" flexWrap="wrap" sx={{ mt: "2px" }}>
            {tech.slice(0, 3).map((t) => (
              <Box
                key={t}
                sx={{
                  px: "10px",
                  py: "3px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: COLORS.bodyWhite,
                  background: COLORS.white,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                {t}
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomCard;
