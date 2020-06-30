import React, { useState } from "react";

import classes from "./InstallBanner.module.css";
import CloseBtn from "./CloseBtn/CloseBtn";
import InstallBtn from "./InstallBtn/InstallBtn";
import NotNow from "./NotNow/NotNow";
import InstallContent from "./InstallContent/InstallContent";

const LAST_SHOW_INSTALL_BANNER = "LAST_SHOW_INSTALL_BANNER";

const InstallBanner = () => {
  const [show, setShow] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  const shouldShow =
    (+localStorage.getItem(LAST_SHOW_INSTALL_BANNER) || 0) + 24 * 60 * 60 * 1000 <
    new Date().getTime();

  window.addEventListener("beforeinstallprompt", (e) => {
    setPromptInstall(e);
    if (shouldShow) setShow(true);
  });

  const onCloseHandler = () => {
    localStorage.setItem(LAST_SHOW_INSTALL_BANNER, new Date().getTime());
    setShow(false);
  };

  const onInstallHandler = () => {
    promptInstall.prompt();

    onCloseHandler();
  };

  return show ? (
    <div className={classes.InstallBanner}>
      <CloseBtn onClick={onCloseHandler} />
      <InstallContent />
      <InstallBtn onClick={onInstallHandler} />
      <NotNow onClick={onCloseHandler} />
    </div>
  ) : null;
};

export default InstallBanner;
