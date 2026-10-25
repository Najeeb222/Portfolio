"use client";

import { AppLayout } from "@layouts/index";
import {
  ContactWithMe,
  Experience,
  Features,
  Header,
  MyPortfolio,
  MyResume,
  PortfolioLoader,
} from "@modules/Home/components";
import { Divider, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

// The intro loader only plays on the first visit of a browser session
const INTRO_KEY = "intro-seen";

const HomeContainer = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    try {
      setShowIntro(sessionStorage.getItem(INTRO_KEY) !== "1");
    } catch {
      setShowIntro(true);
    }
  }, []);

  const handleIntroDone = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Storage blocked (private mode etc.) - the intro just plays again next time
    }
    setShowIntro(false);
  }, []);

  return (
    <>
      <PortfolioLoader visible={showIntro} onDone={handleIntroDone} />
      <AppLayout>
        <Stack gap={{ xs: "80px", md: "110px" }} px={{ md: 0, xs: "16px" }}>
          <Header ready={!showIntro} />

          <Divider />
          <Features />
          <Divider />
          <MyPortfolio />
          <Divider />
          <Experience />
          <Divider />
          <MyResume />
          <Divider />
          <ContactWithMe />
          <Divider />
        </Stack>
      </AppLayout>
    </>
  );
};

export default HomeContainer;
