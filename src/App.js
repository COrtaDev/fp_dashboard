import React from "react";
import { Columns, Content, Footer, Section } from "react-bulma-components";
import Dashboard from "./components/Dashboard";
import TopBanner from "./components/TopBanner";
import "./styles/styles.css";

/*
  All major components of the site are brought here to be assembled
  in a suitable layout before injectation in to the DOM. Not sure if
  that is actually what it's called but yes.
*/
const App = () => {
  return (
    <>
      <Section p={2}>
        <Columns>
          <Columns.Column>
            <TopBanner />

            <Section px={"0"}>
              <Dashboard />
            </Section>
          </Columns.Column>
        </Columns>
      </Section>
      <Section>
        <Footer>
          <Content>
            Email:
            <a href="orta.conrad@student.ccm.edu">
              <i> orta.conrad@student.ccm.edu</i>
            </a>
          </Content>
        </Footer>
      </Section>
    </>
  );
};

export default App;
