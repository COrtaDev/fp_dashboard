import React from "react";
import { Container, Content, Heading } from "react-bulma-components";

// This is the content for the global tab.

const Global = () => {
  return (
    <Container>
      <Heading>Global</Heading>
      <Content>
        <p id="main-intro">
          The Global tab will allow the user to view all of the regions in their
          business at once. All of the data will be compiled and shown here. A
          decision will need be made as to what is best to show here. Judging by
          what is most impactful on a global perspective, some of the criteria
          of what to show may be different that what we choose to display in the
          regional tabs. Seeing as how we want the regional tabs to be more
          granular, there will probably be different data scripts needed for
          each.
        </p>
      </Content>
    </Container>
  );
};
export default Global;
