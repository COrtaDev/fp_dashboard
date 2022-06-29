import React, { useState } from "react";
import { Box, Heading, Hero, Tabs } from "react-bulma-components";
import Introduction from "./Introduction";
import Global from "./Global";

/*
  Top banner is essentially everything above the dashboard proper. It has
  tabs that cycle through the relevant sections of the project and gives
  a discription of what each is/will be
*/
const TopBanner = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const activeTabContent = () => {
    let activeIndex = tabList.findIndex((tab) => tab.name === activeTab);
    return tabList[activeIndex].component;
  };

  return (
    <Box color={"grey"}>
      <Heading textSize={3} mb={2}>
        Athnos Dashboard Utility
      </Heading>
      <Tabs
        tabList={tabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        type="boxed"
        mb={2}
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
        <Hero.Body py={1}>{activeTabContent()}</Hero.Body>
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
