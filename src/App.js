import React from "react";
import { Columns, Content, Footer } from "react-bulma-components";
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
      <Columns>
        <Columns.Column>
          <TopBanner />
          <Dashboard />
          <Footer>
            <Content>
              Email:
              <a href="orta.conrad@student.ccm.edu">
                <i> orta.conrad@student.ccm.edu</i>
              </a>
            </Content>
          </Footer>
        </Columns.Column>
      </Columns>
    </>
  );
};

export default App;
