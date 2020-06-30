import React from "react";
import PropTypes from "prop-types";

import {
  FaMapSigns,
  FaMedapps,
  FaEdit,
  FaPlusCircle,
  FaTrash,
  FaHeartbeat,
  FaUniversalAccess,
  FaFileExport,
  FaFileImport,
} from "react-icons/fa";

import { GiRecycle, GiBlackBook } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdError } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FiPieChart } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";

import classes from "./Icon.module.css";

const icons = {
  FaMapSigns,
  FaEdit,
  FaPlusCircle,
  FaTrash,
  FaMedapps,
  FaHeartbeat,
  FaUniversalAccess,
  AiOutlineFileAdd,
  GiBlackBook,
  FiPieChart,
  GoGear,
  FaFileExport,
  FaFileImport,
  GiRecycle,
  IoIosArrowDown,
  IoIosArrowUp,
  MdError,
};

const Icon = ({ iconName }) => {
  const SelectedIcon =
    icons[
      Object.prototype.hasOwnProperty.call(icons, iconName)
        ? iconName
        : "GiBlackBook"
    ];
  return (
    <i className={classes.Icon}>
      <SelectedIcon />
    </i>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;
