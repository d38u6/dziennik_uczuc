import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Item from "../../../PaperCSS/Navbar/Menu/MenuItems/MenuItem/MenuItem";
import Icon from "../../../UI/Icon/Icon";

const MenuItem = ({ to, caption, icon }) => (
  <Item>
    <Link to={to}>
      <Icon iconName={icon} /> <span>{caption}</span>
    </Link>
  </Item>
);

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default MenuItem;
