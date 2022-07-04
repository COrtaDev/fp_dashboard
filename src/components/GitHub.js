import React from "react";
import {
  Block,
  Button,
  Container,
  Content,
  Heading,
  Level,
} from "react-bulma-components";

// This is the content for the github tab.

const GitHub = () => {
  return (
    <Container>
      <Heading>GitHub</Heading>
      <Content id={"banner"}>
        <Block />
        <Level>
          <Level.Item>
            <p id="main-github">
              If you would like to see my source files, please visit my repo on
              GitHub. Thanks!
            </p>
          </Level.Item>
          <Level.Item>
            <a
              href={"https://github.com/COrtaDev/fp_dashboard"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button>GitHub</Button>
            </a>
          </Level.Item>
        </Level>
        <Block />
      </Content>
    </Container>
  );
};
export default GitHub;
