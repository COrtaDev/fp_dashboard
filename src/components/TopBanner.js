import React, { useState } from "react";
import { Box, Heading, Hero, Tabs } from "react-bulma-components";
import Introduction from "./Introduction";
import Global from "./Global";
const sides = "1px hsl(0, 0%, 81%) solid";
/*
  <TopBanner/> is essentially everything above the dashboard proper. It has
  tabs that cycle through the relevant sections of the project and gives
  a discription of what each is/will be.
*/
const TopBanner = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const activeTabContent = () => {
    let activeIndex = tabList.findIndex((tab) => tab.name === activeTab);
    return tabList[activeIndex].component;
  };

  return (
    <Box style={{ border: "1px lightgrey solid" }}>
      <Heading textSize={3} mb={2}>
        Athnos Dashboard Utility
      </Heading>
      <Tabs
        tabList={tabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        type="boxed"
        radiusless={false}
        mb={"0"}
        px={1}
      >
        {tabList.map((tab) => (
          <Tab
            title={tab.title}
            name={tab.name}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </Tabs>

      <Hero color={"secondary"} size={"small"}>
        <Box
          paddingless={true}
          style={{ borderBottom: sides, borderLeft: sides, borderRight: sides }}
        >
          <Hero.Body py={1}>{activeTabContent()}</Hero.Body>
        </Box>
      </Hero>
    </Box>
  );
};

const tabList = [
  { component: <Introduction />, name: "intro", title: "Intro" },
  { component: <Global />, name: "global", title: "Global" },
];

const Tab = ({ title, name, activeTab, setActiveTab }) => {
  return (
    <Tabs.Tab active={activeTab === name} onClick={() => setActiveTab(name)}>
      {title}
    </Tabs.Tab>
  );
};

export default TopBanner;
