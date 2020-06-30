import React from "react";
import PropTypes from "prop-types";

import classes from "./Modal.module.css";

import Backdrop from "./Backdrop/Backdrop";
import ModalBody from "./ModalBody/ModalBody";
import ModalTitle from "./ModalTitle/ModalTitle";
import CloseButton from "./CloseButton/CloseButton";
import Button from "../../Button/Button";

const Modal = ({ title, show, onClose, withOutBtn, children }) => (
  <div className={[classes.Modal, show ? classes.Show : null].join(" ")}>
    <Backdrop onClick={onClose} />
    <ModalBody>
      <ModalTitle title={title} />
      <CloseButton onClick={onClose} />

      {children}

      {!withOutBtn && (
        <Button block type="Primary" onClick={onClose}>
          OK
        </Button>
      )}
    </ModalBody>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  withOutBtn: PropTypes.bool,
};

export default Modal;
