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
  type?: "button" | "submit" | "reset";
  href?: string; // External URLs open in a new tab, "#section" links scroll in place
  ariaLabel?: string;
  variant?: "default" | "primary"; // primary = solid red call-to-action
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
  type,
  href,
  ariaLabel,
  variant = "default",
}: Props) => {
  const isLink = Boolean(downloadLink || href);
  const isExternal = Boolean(href?.startsWith("http"));
  const isPrimary = variant === "primary";

  return (
    <Button
      component={isLink ? "a" : "button"}
      href={downloadLink || href || undefined}
      download={downloadLink ? fileName || true : undefined} // ✅ Only apply if downloadLink exists
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
      type={type}
      sx={{
        height: height ? height : "auto",
        width: width ? width : "auto",
        border: "none",
        boxShadow: isPrimary
          ? "0 10px 20px -8px rgba(255, 1, 79, 0.6)"
          : shadows.shadowWhite3,
        background: isPrimary
          ? COLORS.primary
          : COLORS.gradients.gradientBoxW,
        borderRadius: "10px",
        transition: "all 0.3s ease",
        textTransform: "none",
        color: isPrimary ? COLORS.white : COLORS.primary,
        position: "relative",
        overflow: "hidden",
        fontWeight: 600,
        padding: isPrimary ? "12px 24px" : title ? "10px 20px" : "10px",
        gap: "8px",
        "&:hover": {
          transform: "translateY(-3px)",
          color: isPrimary || hover ? COLORS.white : COLORS.primary,
          background: isPrimary
            ? "#e6003f"
            : hover
              ? COLORS.gradients.gradientRedHover
              : COLORS.gradients.gradientBoxW,
        },
        "&:focus-visible": {
          outline: `2px solid ${COLORS.primary}`,
          outlineOffset: "3px",
        },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      {title && (
        <Typography
          component="span"
          sx={{
            fontSize: fontsize ? fontsize : "13px",
            fontWeight: isPrimary ? 600 : 500,
            fontFamily: "inherit",
          }}
        >
          {title}
        </Typography>
      )}
      {icon && icon}
    </Button>
  );
};

export default CustomButton;
