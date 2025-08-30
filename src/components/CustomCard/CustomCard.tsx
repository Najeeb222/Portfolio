import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";
import {
  AccessTimeOutlined,
  CallMadeOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import { Box, Card, CardContent, Icon, Stack, Typography } from "@mui/material";

type Props = {
  image: string;
  category: string;
  title: string;
  link: string; // ✅ new
  favorites?: boolean;
  time?: boolean;
};

const CustomCard = ({ image, category, title, link, favorites, time }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <Card
        sx={{
          p: { md: "30px", xs: "20px" },
          border: "none",
          boxShadow: shadows.shadowWhite3,
          background: COLORS.gradients.gradientBoxW,
          borderRadius: "10px",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          "&:hover": { transform: "translateY(-5px)" }, // ✅ hover effect
        }}
      >
        <Box
          sx={{
            height: "auto",
            overflow: "hidden",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>

        {/* Card Content */}
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "11px",
                color: COLORS.primary,
              }}
            >
              {category}
            </Typography>
          </Stack>

          <Typography
            variant="h4"
            sx={{
              fontSize: { md: "23px", xs: "20px" },
              fontWeight: 600,
              color: COLORS.headingWv,
              transition: "color 0.4s ease",
              "&:hover": { color: COLORS.primary },
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};



export default CustomCard;