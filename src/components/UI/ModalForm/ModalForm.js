import React from "react";
import PropTypes from "prop-types";

import Modal from "../../PaperCSS/UI/Modal/Modal";
import Textarea from "../../PaperCSS/Form/Textarea/Textarea";

const ModalForm = ({ title, show, onClose, textareaConf, children, render }) => (
  <Modal title={title} show={show} onClose={onClose}>
    {children}
    <Textarea {...textareaConf} style={{ fontSize: "23" }} />
    {render && render()}
  </Modal>
);

ModalForm.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  textareaConf: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  }),
  render: PropTypes.func,
};

export default ModalForm;
