"use client";

import { useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { COLORS } from "@constants/color";
import { EASE_OUT } from "@constants/motion";

// --- BANTER LOADER ANIMATIONS ---
/**
 * Refined Banter Loader matching the user's request but polished for a premium UI/UX feel.
 */

const LoaderOverlay = styled(motion.div)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ecf0f3", // Theme background
  zIndex: 9999,
  overflow: "hidden",
}));

const BackgroundPattern = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.03,
  backgroundImage: `radial-gradient(circle at 25px 25px, ${COLORS.primary} 2px, transparent 2px)`,
  backgroundSize: "50px 50px",
  pointerEvents: "none",
});

const BanterLoaderContainer = styled(Box)(() => ({
  position: "relative",
  width: "80px",
  height: "80px",
  marginBottom: "40px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "6px",
}));

const BoxElement = styled(motion.div)(() => ({
  width: "22px",
  height: "22px",
  backgroundColor: COLORS.primary, // #ff014f
  borderRadius: "4px",
  boxShadow: "4px 4px 8px rgba(0,0,0,0.1), -2px -2px 6px rgba(255,255,255,0.8)", // Soft neumorphic touch
}));

const BrandingWrapper = styled(motion.div)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
}));

const NameText = styled(Typography)(() => ({
  fontSize: "2.5rem",
  fontWeight: 800,
  letterSpacing: "4px",
  textTransform: "uppercase",
  color: "#3c3e41", // COLORS.bodyWhite
  fontFamily: "'Montserrat', sans-serif",
  marginBottom: "4px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -4,
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: "2px",
    background: COLORS.primary,
    transition: "width 0.6s ease",
  },
  "&:hover::after": {
    width: "80%",
  },
}));

const RoleText = styled(Typography)(() => ({
  fontSize: "0.9rem",
  fontWeight: 500,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: COLORS.primary,
  fontFamily: "'Montserrat', sans-serif",
  opacity: 0.8,
}));

const ProgressTrack = styled(Box)({
  position: "absolute",
  bottom: "-20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "200px",
  height: "3px",
  background: "rgba(255,1,79,0.1)",
  borderRadius: "4px",
  overflow: "hidden",
});

const ProgressFill = styled(motion.div)({
  height: "100%",
  background: `linear-gradient(90deg, ${COLORS.primary}, #ff4d7f)`,
  borderRadius: "4px",
});

// --- COMPONENT ---

const INTRO_KEY = "intro-seen";

const PortfolioLoader = ({ minDisplayTime = 1100 }: { minDisplayTime?: number }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_KEY) === "1") {
        document.body.style.overflow = "";
        setVisible(false);
        return;
      }
    } catch {
      // Continue with the intro when storage is unavailable.
    }

    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        // Storage can be blocked in private browsing modes.
      }
      document.body.style.overflow = "";
      setVisible(false);
    }, minDisplayTime);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [minDisplayTime]);

  // Grid boxes morph in a staggered wave
  const boxVariants = (index: number) => ({
    animate: {
      scale: [1, 1.2, 0.9, 1.1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ["4px", "20px", "50%", "12px", "4px"],
      backgroundColor: [COLORS.primary, "#ff6b9d", COLORS.primary],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        ease: "circInOut" as const,
        delay: index * 0.05,
        times: [0, 0.2, 0.4, 0.6, 1],
      },
    },
  });

  return (
    <AnimatePresence>
      {visible && (
        <LoaderOverlay
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: EASE_OUT },
          }}
        >
          <BackgroundPattern />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.4 } }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          >
            <BanterLoaderContainer>
              {[...Array(9)].map((_, i) => (
                <BoxElement key={i} variants={boxVariants(i)} animate="animate" />
              ))}
            </BanterLoaderContainer>

            <BrandingWrapper
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: EASE_OUT }}
            >
              <NameText>Najeeb</NameText>
              <RoleText>MERN Stack Developer</RoleText>

              <ProgressTrack>
                <ProgressFill
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: minDisplayTime / 1000,
                    ease: "easeInOut",
                  }}
                />
              </ProgressTrack>
            </BrandingWrapper>
          </motion.div>
        </LoaderOverlay>
      )}
    </AnimatePresence>
  );
};

export default PortfolioLoader;
