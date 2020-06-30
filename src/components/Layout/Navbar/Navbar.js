import React from "react";
import PaperNavbar from "../../PaperCSS/Navbar/Navbar";
import BrandName from "../../PaperCSS/Navbar/Brand/Brand";
import Menu from "../../PaperCSS/Navbar/Menu/Menu";
import MenuItem from "./MenuItem/MenuItem";

export const ITEMS = [
  { to: "/dodaj-wpis", caption: "Dodaj Wpis", icon: "AiOutlineFileAdd" },
  { to: "/moje-wpisy", caption: "Moje Wpisy", icon: "GiBlackBook" },
  { to: "/analiza", caption: "Analiza", icon: "FiPieChart" },
  { to: "/opcje", caption: "Opcje", icon: "GoGear" },
];

const Navbar = () => (
  <PaperNavbar fixed split>
    <BrandName>
      <a href="/">DZIENNIK UCZUĆ</a>
    </BrandName>
    <Menu id="navbar-menu">
      {ITEMS.map((item) => (
        <MenuItem key={item.to} {...item} />
      ))}
    </Menu>
  </PaperNavbar>
);

export default Navbar;
