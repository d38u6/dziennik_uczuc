import React, { Fragment } from "react";
import PropTypes from "prop-types";

import EditButton from "./EditButton/EditButton";
import ModalForm from "../../../../../../UI/ModalForm/ModalForm";
import AddButton from "./AddButton/AddButton";
import OptionItem from "./OptionItem/OptionItem";

const EditForm = (props) => {
  const { title, show, setShow, options, onAdd, onRemove, textareaConf } = props;
  return (
    <Fragment>
      <EditButton onClick={() => setShow(true)} />
      <ModalForm
        title={title}
        show={show}
        onClose={() => setShow(false)}
        textareaConf={textareaConf}
        render={() => <AddButton onAdd={onAdd} />}
      >
        {options.map(({ id, value }) => (
          <OptionItem key={id} value={value} onRemove={() => onRemove(id)} />
        ))}
      </ModalForm>
    </Fragment>
  );
};

EditForm.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  textareaConf: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

export default EditForm;
