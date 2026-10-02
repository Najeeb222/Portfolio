import Reveal from "@components/Reveal/Reveal";
import { COLORS } from "@constants/color";
import { Stack, Typography } from "@mui/material";

type Props = {
  eyebrow: string;
  title: string;
  align?: "center" | "start";
};

const SectionHeading = ({ eyebrow, title, align = "center" }: Props) => {
  return (
    <Reveal>
      <Stack
        sx={{
          gap: "12px",
          mb: { xs: "32px", md: "48px" },
          textAlign: align === "center" ? "center" : { xs: "center", md: "start" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: COLORS.primary,
          }}
        >
          {eyebrow}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "30px", sm: "36px", md: "44px" },
            fontWeight: 700,
            lineHeight: 1.2,
            color: COLORS.headingWv,
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Reveal>
  );
};

export default SectionHeading;
