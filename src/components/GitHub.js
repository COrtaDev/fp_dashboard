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
              GitHub. <br />
              There you will find a directory <code>src/components</code> which
              lists the individual components I developed for use in the project
              (so far...)
            </p>
          </Level.Item>
          <Level.Item>
            <a
              href={"https://github.com/COrtaDev/fp_dashboard"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button>Vist the GitHub repo here</Button>
            </a>
          </Level.Item>
        </Level>
        <Block />
      </Content>
    </Container>
  );
};
export default GitHub;
