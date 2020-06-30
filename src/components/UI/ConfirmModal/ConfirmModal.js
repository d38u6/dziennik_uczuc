import React from "react";
import PropTypes from "prop-types";

import Modal from "../../PaperCSS/UI/Modal/Modal";
import classes from "./ConfirmModal.module.css";
import Button from "../../PaperCSS/Button/Button";

const ConfirmModal = ({ show, content, onAccept, onClose }) => (
  <Modal show={show} onClose={onClose} withOutBtn>
    <p className={classes.Content}>{content}</p>
    <div className={classes.Buttons}>
      <Button type="Success" onClick={onAccept}>
        Tak
      </Button>
      <Button type="Danger" onClick={onClose}>
        Nie
      </Button>
    </div>
  </Modal>
);

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  content: PropTypes.string,
  onAccept: PropTypes.func,
  onClose: PropTypes.func,
};

export default ConfirmModal;
