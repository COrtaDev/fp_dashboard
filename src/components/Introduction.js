import React from "react";
import { Container, Content, Heading } from "react-bulma-components";

const Introduction = () => {
  return (
    <Container>
      <Heading>Introduction</Heading>
      <Content>
        <p id="main-intro">
          Athnos Dashboard will be a utility to help business people manage
          their operations. The dashboard will analyze all the relevant data and
          display the result to the user. By providing all this information in
          an organized, all-in-one location, users will be able to make informed
          decisions about the operation of their business. Charts and graphs
          will highlight trends over time. The dashboard will provide options to
          allow users to get more precise control of what they wish to see.
        </p>
      </Content>
    </Container>
  );
};
export default Introduction;
