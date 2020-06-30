import React from "react";
import PropTypes from "prop-types";
import Row from "../Layout/Row/Row";
import TabsItem from "./TabsItem/TabsItem";

const Tabs = ({ items, onItemClick }) => (
  <Row position={"Center"}>
    {items.map(({ id, caption, active }) => (
      <TabsItem
        key={id}
        caption={caption}
        active={active}
        onClick={() => onItemClick(id)}
      />
    ))}
  </Row>
);

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ),
  onItemClick: PropTypes.func,
};

export default Tabs;
