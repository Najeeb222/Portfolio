import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";
import {
  AccessTimeOutlined,
  CallMadeOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import { Box, Card, CardContent, Icon, Stack, Typography } from "@mui/material";

type Props = {
  favorites?: boolean;
  time?: boolean;
};

const CustomCard = ({ favorites, time }: Props) => {

  return (
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
          src="/assets/images/portfolio_1.jpg"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          "&.MuiCardContent-root": { paddingBottom: 0 },
        }}
      >
        <Stack direction="row" gap="20px" justifyContent="space-between">
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "11px",
              color: COLORS.primary,
            }}
          >
            DEVELOPMENT
          </Typography>
          {favorites && (
            <Stack direction="row" fontSize="12px" gap="2px" color={COLORS.bodyWhite}>
              <span>
                <FavoriteBorder sx={{ fontSize: "15px" }} />
              </span>
              <span>342</span>
            </Stack>
          )}
          {time && (
            <Stack direction="row" fontSize="12px" gap="2px" color={COLORS.bodyWhite}>
              <span>
                <AccessTimeOutlined sx={{ fontSize: "15px" }} />
              </span>
              <span>2 hours read</span>
            </Stack>
          )}
        </Stack>
        <Stack direction="row">
          <Typography
            className="Text"
            variant="h4"
            sx={{
              fontSize: { md: "23px", xs: "20px" },
              padding: "0",
              fontWeight: 600,
              height: "100%",
              width: "100%",
              color: COLORS.headingWv,
              transition: "color 0.4s ease",
              "&:hover": { color: COLORS.primary },
            }}
          >
            The services provide for design
            <span>
              <Icon
                className="icon"
                sx={{
                  opacity: 0,
                  pt: "5px",
                  display: "inline-block",
                  transition: "opacity 0.4s ease, transform 0.3s ease",
                }}
              >
                <CallMadeOutlined sx={{ fontSize: "30px", color: COLORS.primary }} />
              </Icon>
            </span>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CustomCard;