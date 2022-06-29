import React from "react";
import { Box, Heading, Hero, Tabs } from "react-bulma-components";
import Introduction from "./Introduction";

const TopBanner = () => {
  return (
    <Box color={"grey"}>
      <Heading textSize={3} mb={2}>
        Athnos Dashboard Utility
      </Heading>
      {/* <Tabs type="boxed" mb={2}> */}
      {/* <Tabs.Tab id={"intro"} onClick={handleClick}>
          Intro
          </Tabs.Tab>
          <Tabs.Tab id={"global"} onClick={handleClick}>
          Global
        </Tabs.Tab> */}
      {/* </Tabs>
      <Hero color={"secondary"} size={"small"}>
        <Hero.Body py={1}>
          <Introduction />
        </Hero.Body> */}
      {/* </Hero> */}
    </Box>
  );
};

const tabList = [
  { component: Introduction, name: "Intro" },
  { component: "Global Tab LOL", name: "Global" },
];

const Tab = ({ name, active }) => {
  return <Tabs.Tab active={active}>{name}</Tabs.Tab>;
};
const TabGroup = () => {
  return (
    // <>
    // {tabList.map(tab=>{<Tab})}
    // </>
    // <>
    <Tabs type="boxed" mb={2}>
      {tabList.map((tab) => {
        <Tab name={tab.name} />;
      })}
    </Tabs>
    //   <Hero color={"secondary"} size={"small"}>
    //     <Hero.Body py={1}>
    //       <Introduction />
    //     </Hero.Body>
    //   </Hero>
    // </>
  );
};
export default TopBanner;
