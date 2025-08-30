import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  styled,
  keyframes,
  Fade,
} from "@mui/material";

// ===== Animations =====
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glow = keyframes`
  0% { text-shadow: 0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 40px #00e5ff; }
  50% { text-shadow: 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 60px #ff0080; }
  100% { text-shadow: 0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 40px #00e5ff; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;


const LoaderContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `linear-gradient(-45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, #0f2027, #2c5364)`,
  backgroundSize: "400% 400%",
  animation: `${gradient} 12s ease infinite`,
  zIndex: 9999,
  color: "white",
  overflow: "hidden",
}));

const LogoOrb = styled(Box)(() => ({
  width: 160,
  height: 160,
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "2px solid rgba(255, 255, 255, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${float} 4s ease-in-out infinite`,
  boxShadow:
    "0 0 30px rgba(0,229,255,0.6), inset 0 0 30px rgba(255,255,255,0.1)",
}));

const LogoText = styled(Typography)(() => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  fontFamily: "Work Sans, sans-serif",
  animation: `${glow} 3s ease-in-out infinite`,
  letterSpacing: "3px",
  userSelect: "none",
}));

const TypingTagline = styled(Typography)(() => ({
  fontSize: "1.2rem",
  marginTop: "1rem",
  fontFamily: "monospace",
  fontWeight: 300,
  whiteSpace: "nowrap",
  overflow: "hidden",
  borderRight: "2px solid #fff",
  width: "0",
  animation: `${typewriter} 3s steps(25, end) forwards, ${blink} 0.75s step-end infinite`,
}));

const ProgressRing = styled("div")<{ progress: number }>(({ progress }) => ({
  marginTop: "2rem",
  width: 120,
  height: 120,
  borderRadius: "50%",
  background: `conic-gradient(#00e5ff ${progress * 3.6}deg, rgba(255,255,255,0.1) ${progress * 3.6}deg)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 25px rgba(0,229,255,0.5)",
  transition: "background 0.3s ease",
}));

const ProgressInner = styled("div")(() => ({
  width: 90,
  height: 90,
  borderRadius: "50%",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontFamily: "monospace",
  fontSize: "0.9rem",
}));


interface PortfolioLoaderProps {
  onLoadingComplete?: () => void;
  minDisplayTime?: number;
}

const PortfolioLoader: React.FC<PortfolioLoaderProps> = ({
  onLoadingComplete,
  minDisplayTime = 4000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 180);

    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, minDisplayTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete, minDisplayTime]);

  if (!isVisible) return null;

  return (
    <Fade in={true} timeout={800}>
      <LoaderContainer>
     
        <LogoOrb>
          <LogoText>NU</LogoText>
        </LogoOrb>

       
        <TypingTagline>
          {progress < 40
            ? "Designing Interfaces..."
            : progress < 75
            ? "Developing Ideas..."
            : "Delivering Impact..."}
        </TypingTagline>


        <ProgressRing progress={progress}>
          <ProgressInner>{progress}%</ProgressInner>
        </ProgressRing>

        <Typography
          variant="caption"
          sx={{ mt: 3, opacity: 0.6, letterSpacing: 1 }}
        >
          Crafting something amazing...
        </Typography>
      </LoaderContainer>
    </Fade>
  );
};

export default PortfolioLoader;
