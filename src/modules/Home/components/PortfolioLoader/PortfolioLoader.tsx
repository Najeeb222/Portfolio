import { useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@constants/color";

// --- BANTER LOADER ANIMATIONS ---
/**
 * Refined Banter Loader matching the user's request but polished for a premium UI/UX feel.
 */

const LoaderOverlay = styled(motion.div)(({ theme }) => ({
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

const ProgressBar = styled(motion.div)({
  position: "absolute",
  bottom: "-20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "200px",
  height: "3px",
  background: "rgba(255,1,79,0.1)",
  borderRadius: "4px",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "var(--progress)",
    background: `linear-gradient(90deg, ${COLORS.primary}, #ff4d7f)`,
    borderRadius: "4px",
    animation: "progressPulse 1.5s ease infinite",
  },
  "@keyframes progressPulse": {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0.7 },
  },
});

// --- COMPONENT ---

interface PortfolioLoaderProps {
  onLoadingComplete?: () => void;
  minDisplayTime?: number;
  loadingProgress?: number;
}

const PortfolioLoader: React.FC<PortfolioLoaderProps> = ({
  onLoadingComplete,
  minDisplayTime = 3000,
  loadingProgress = 0,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 800);
    }, minDisplayTime);

    let interval: NodeJS.Timeout;

    // Simulate progress if not provided
    if (loadingProgress === 0) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 15;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 400);
    } else {
      setProgress(loadingProgress);
    }

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, [onLoadingComplete, minDisplayTime, loadingProgress]);

  // Enhanced Framer Motion Variants for the grid boxes
  const boxVariants = (index: number) => ({
    animate: {
      scale: [1, 1.2, 0.9, 1.1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ["4px", "20px", "50%", "12px", "4px"],
      backgroundColor: [
        COLORS.primary,
        "#ff6b9d", // secondary/lighter primary
        COLORS.primary,
      ],
      y: [0, -5, 0, 5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "circInOut",
        delay: index * 0.08,
        times: [0, 0.2, 0.4, 0.6, 1],
      },
    },
  });

  // Container animation for entrance
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <LoaderOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1] },
          }}
        >
          <BackgroundPattern />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <BanterLoaderContainer>
              {[...Array(9)].map((_, i) => (
                <BoxElement
                  key={i}
                  variants={boxVariants(i)}
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </BanterLoaderContainer>

            <BrandingWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div variants={textVariants}>
                <NameText>Najeeb</NameText>
              </motion.div>

              <motion.div variants={textVariants} transition={{ delay: 0.2 }}>
                <RoleText>MERN Stack Developer</RoleText>
              </motion.div>

              <ProgressBar
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{
                  ["--progress" as any]: `${progress}%`,
                }}
              />
            </BrandingWrapper>
          </motion.div>

          {/* Loading percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            style={{
              position: "absolute",
              bottom: 40,
              right: 40,
              fontSize: "0.8rem",
              color: COLORS.primary,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
            }}
          >
            {Math.round(progress)}%
          </motion.div>
        </LoaderOverlay>
      )}
    </AnimatePresence>
  );
};

export default PortfolioLoader;
