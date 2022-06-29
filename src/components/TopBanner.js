import React from "react";
import { Box, Heading, Hero, Tabs } from "react-bulma-components";
import Introduction from "./Introduction";

const TopBanner = () => {
  return (
    <Box color={"grey"}>
      <Heading textSize={3} mb={2}>
        Athnos Dashboard Utility
      </Heading>
      <Tabs type="boxed" mb={2}>
        <Tabs.Tab>Intro</Tabs.Tab>
      </Tabs>
      <Hero color={"secondary"} size={"small"}>
        <Hero.Body py={1}>
          <Introduction />
        </Hero.Body>
      </Hero>
    </Box>
  );
};

export default TopBanner;
