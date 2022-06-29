import React from "react";
import { Columns, Content, Footer } from "react-bulma-components";
import Dashboard from "./components/Dashboard";
import TopBanner from "./components/TopBanner";
import "./styles/styles.css";

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
