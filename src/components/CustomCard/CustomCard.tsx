import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  image: string;
  category: string;
  title: string;
  link: string;
};

const dropIn = {
  hidden: { y: -200, opacity: 0, rotate: -10 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: { type: "spring", stiffness: 200 },
  },
};

const CustomCard = ({ image, category, title, link }: Props) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block" }}
      initial="hidden"
      whileInView="visible"  // ✅ animates when scrolled into view
      viewport={{ once: true, amount: 0.3 }} // ✅ animate once, when 30% of card is visible
      variants={dropIn}
      whileHover="hover"
    >
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
              objectPosition: "top",
              transition: "transform 0.4s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </Box>

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
              minHeight: "60px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </motion.a>
  );
};

export default CustomCard;
