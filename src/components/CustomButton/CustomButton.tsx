import { Button, Typography } from "@mui/material";
import { shadows } from "@constants/shadow";
import { COLORS } from "@constants/color";

type Props = {
  width?: string | number;
  height?: string | number;
  title?: string | number;
  fontsize?: string | number;
  hover?: boolean;
  icon?: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  downloadLink?: string; // 🔥 File URL
  fileName?: string; // 🔥 Downloaded file name
};

const CustomButton = ({
  height,
  width,
  hover,
  title,
  icon,
  fontsize,
  onClick,
  downloadLink,
  fileName,
}: Props) => {
  return (
    <Button
      component={downloadLink ? "a" : "button"}
      href={downloadLink || undefined}
      download={downloadLink ? fileName || true : undefined} // ✅ Only apply if downloadLink exists
      onClick={onClick}
      sx={{
        height: height ? height : "auto",
        width: width ? width : "auto",
        border: "none",
        boxShadow: shadows.shadowWhite3,
        background: COLORS.gradients.gradientBoxW,
        borderRadius: "10px",
        transition: "all 0.3s ease",
        textTransform: "none",
        color: COLORS.primary,
        position: "relative",
        overflow: "hidden",
        fontWeight: 600,
        padding: "10px",
        "&:hover": {
          transform: "translateY(-5px)",
          color: COLORS.white,
          background: hover
            ? COLORS.gradients.gradientRedHover
            : COLORS.gradients.gradientBoxW,
        },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      {title && (
        <Typography
          sx={{ fontSize: fontsize ? fontsize : "13px", fontWeight: 500 }}
        >
          {title}
        </Typography>
      )}
      {icon && icon}
    </Button>
  );
};

export default CustomButton;
