import React, { useState } from "react";
import { Box, Heading, Hero, Tabs } from "react-bulma-components";
import Introduction from "./Introduction";
import Global from "./Global";

const TopBanner = () => {
  // create state variable for activeTab
  const [activeTab, setActiveTab] = useState("intro");

  // create a function to set the state to a string passed as an argument

  // create a function called activeTabContent to find the index in the tabList array where
  //    the content we want rendered is.
  //    Return the component stored there with the Array.findIndex method
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
        {/* inside this component, send a prop tabList (an array of objects key val pairs),
          a prop actTab (a string with the name of the tab we want active), and a prop to set
          the state of the banner.

          The end result should be mapping over the array here to create individual tabs
            with those props passed in. Something like:
             <Tab tabList={tabList}
                  activeTab={activeTab}
                  setActiveTab=setActiveTab(activeTab)
        */}
        {tabList.map((tab) => (
          <Tab
            title={tab.title}
            name={tab.name}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </Tabs>
      {/* add a key which will be the current active tab,
          pass this key to <TopBanner />. Add a prop of content,
          this prop will be the return of function that finds the component based
          on an index of tabsList (an array of key val pairs).
        */}
      <Hero color={"secondary"} size={"small"}>
        <Hero.Body py={1}>
          {/* in here, we will render the result of the function activeTabContent */}
          {/* <Introduction /> */}
          {activeTabContent()}
        </Hero.Body>
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
