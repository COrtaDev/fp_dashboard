import React from "react";
import { Menu as BulmaMenu } from "react-bulma-components";

/*
  <Menu /> is the vertical menu to the left of the dashboard proper. It
  has no interactivity as of yet. We are planning to have this control what
  is displayed in the dashboard window directly to the left of this.
*/

const Menu = () => {
  return (
    <BulmaMenu>
      <BulmaMenu.List title={"Global Overview"}>
        <BulmaMenu.List.Item>View All</BulmaMenu.List.Item>
      </BulmaMenu.List>
      <BulmaMenu.List title={"Regional Overview"}>
        <BulmaMenu.List.Item>New York</BulmaMenu.List.Item>
        <BulmaMenu.List.Item>Chicago</BulmaMenu.List.Item>
        <BulmaMenu.List.Item>Dallas</BulmaMenu.List.Item>
        <BulmaMenu.List.Item>Portland</BulmaMenu.List.Item>
        <BulmaMenu.List.Item>San Francisco</BulmaMenu.List.Item>
        <BulmaMenu.List.Item>Miami</BulmaMenu.List.Item>
      </BulmaMenu.List>
      <BulmaMenu.List title={"Operations"}>
        <BulmaMenu.List.Item>Communications Hub</BulmaMenu.List.Item>
        <BulmaMenu.List.Item>Future Outlook</BulmaMenu.List.Item>
      </BulmaMenu.List>
    </BulmaMenu>
  );
};
export default Menu;
