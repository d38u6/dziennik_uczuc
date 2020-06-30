import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./Alert.module.css";

const Alert = ({ content, type, onClose, showMs }) => {
  const hiddenStyles = [classes.Alert, classes[type || "Primary"], classes.Hidden];
  const [styles, setStyles] = useState(hiddenStyles);

  const onCloseHandler = () => {
    setStyles(hiddenStyles);
    setTimeout(onClose, 250);
  };
  React.useEffect(() => {
    const closeTimeout = setTimeout(onCloseHandler, showMs || 7000);
    const stylesTimeout = setTimeout(() => {
      setStyles(hiddenStyles.slice(0, 2));
    }, 44);
    return () => {
      clearTimeout(closeTimeout);
      clearTimeout(stylesTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.join(" ")}>
      {content}
      <span className={classes.BtnClose} onClick={onCloseHandler}>
        X
      </span>
    </div>
  );
};

Alert.propTypes = {
  content: PropTypes.string,
  type: PropTypes.oneOf(["Primary", "Secondary", "Success", "Warning", "Danger"]),
  onClose: PropTypes.func,
  showMs: PropTypes.number,
};

export default Alert;
