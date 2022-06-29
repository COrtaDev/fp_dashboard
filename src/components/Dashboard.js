import React from "react";
import {
  Container,
  Level,
  Columns,
  Navbar,
  Notification,
  Image,
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
    <Columns>
      <Columns.Column>
        <Container backgroundColor={"secondary"} breakpoint={"desktop"}>
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
          </Navbar>
          <Columns>
            <Columns.Column size={"one-quarter"}>
              <Container>
                <Menu></Menu>
              </Container>
            </Columns.Column>
            <Columns.Column size={"three-quarters"}>
              <Columns>
                <Container>
                  <Notification color={"secondary"}>
                    Content area incoming...
                  </Notification>
                </Container>
              </Columns>
            </Columns.Column>
          </Columns>
        </Container>
      </Columns.Column>
    </Columns>
  );
};
const pathToOwl = "https://cdn-icons-png.flaticon.com/512/1864/1864652.png";
const altText = "Glowie is the mascot of Athnos Dashboard!";
export default Dashboard;
