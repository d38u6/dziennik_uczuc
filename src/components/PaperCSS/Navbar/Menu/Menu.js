import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./Menu.module.css";

import MenuItems from "./MenuItems/MenuItems";
import MenuButton from "./MenuButton/MenuButton";

const Menu = ({ id, children }) => {
  const [menuOpenState, setmenuOpenState] = useState(false);

  const openChangedHandler = (e) => {
    setmenuOpenState((prevState) => !prevState);
  };

  return (
    <div className={classes.Menu}>
      <input
        id={id}
        type="checkbox"
        name={id}
        onChange={openChangedHandler}
        checked={menuOpenState}
      />
      <MenuButton id={id} open={menuOpenState} />
      <MenuItems id={id} open={menuOpenState}>
        {children}
      </MenuItems>
    </div>
  );
};

Menu.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Menu;
