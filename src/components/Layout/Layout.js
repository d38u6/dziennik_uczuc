import React, { Fragment } from "react";

import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    <Content>{children}</Content>
  </Fragment>
);

export default Layout;
