import React from "react";
import {
  Box,
  Container,
  Level,
  Columns,
  Navbar,
  Notification,
  Image,
  Section,
} from "react-bulma-components";
import Menu from "./Menu";

/*
  <Dashboard /> is the dashboard in it's entirty. It is composed of several
  sub-components with more to come as development continues. All sub-components
  of the dashboard proper meet here and are arranged in the necessary way as
  to allow for flexibility and modularity above this layer.
*/

const Dashboard = () => {
  return (
    <Box style={{ border: "1px lightgrey solid" }} p={"0"}>
      <Columns id={"db#main_column"}>
        <Columns.Column id={"db#main_column-navbar"} size={"full"}>
          <Box
            py={"0"}
            pl={1}
            marginless={true}
            style={{ borderBottom: "1px lightgrey solid" }}
          >
            <Navbar>
              <Navbar.Brand>
                <Navbar.Item active={true} hoverable={false}>
                  <Notification
                    px={4}
                    py={2}
                    color={"primary"}
                    textWeight={"bold"}
                    textSize={5}
                  >
                    <Level>
                      <Level.Item>
                        <Image
                          src={pathToOwl}
                          alt={altText}
                          size={[64, "square"]}
                          mr={2}
                        />
                        Athnos Dashboard
                      </Level.Item>
                    </Level>
                  </Notification>
                </Navbar.Item>
              </Navbar.Brand>

              <Navbar.Menu>
                <Navbar.Container align={"right"}>
                  <Navbar.Item>Resources</Navbar.Item>
                </Navbar.Container>
              </Navbar.Menu>
            </Navbar>
          </Box>
          <Section px={"0"} pt={1} pb={"0"}>
            <Columns id={"db#content_column"}>
              <Columns.Column
                id={"db#content_column-menu"}
                size={"one-quarter"}
                pr={"0"}
              >
                <Box
                  shadowless={true}
                  style={{ border: "1px lightgrey solid" }}
                >
                  <Menu />
                </Box>
              </Columns.Column>
              <Columns.Column
                id={"db#content_column-displayArea"}
                size={"three-quarters"}
                pl={"0"}
              >
                <Container style={{ height: "100%" }}>
                  <Box
                    paddingless={true}
                    shadowless={true}
                    style={{ height: "100%", border: "1px lightgrey solid" }}
                  >
                    <Notification
                      color={"secondary"}
                      style={{ height: "100%" }}
                    >
                      Content area incoming...
                    </Notification>
                  </Box>
                </Container>
              </Columns.Column>
            </Columns>
          </Section>
        </Columns.Column>
      </Columns>
    </Box>
  );
};
const pathToOwl = "https://cdn-icons-png.flaticon.com/512/1864/1864652.png";
const altText = "Glowie is the mascot of Athnos Dashboard!";
export default Dashboard;
