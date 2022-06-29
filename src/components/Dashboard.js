import React from "react";
import {
  Container,
  Level,
  Columns,
  Navbar,
  Notification,
  Image,
} from "react-bulma-components";
const pathToOwl = "https://cdn-icons-png.flaticon.com/512/1864/1864652.png";

const altText = "Glowie is the mascot of Athnos Dashboard!";

const Dashboard = () => {
  return (
    <Container breakpoint={"desktop"}>
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
            <h1>Hello Baby Dashboard!</h1>
          </Container>
        </Columns.Column>
        <Columns.Column size={"three-quarters"}>
          <Container>
            <h1>Content area incoming...</h1>
          </Container>
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default Dashboard;
