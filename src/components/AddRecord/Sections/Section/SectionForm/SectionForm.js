import React, { Fragment } from "react";
import PropTypes from "prop-types";

import SectionButton from "./SectionButton/SectionButton";
import ModalForm from "../../../../UI/ModalForm/ModalForm";
import SelectionOptionsForm from "../../../../../containers/AddRecord/SectionContainer/SelectionOptionsForm/SelectionOptionsForm";

const SectionForm = (props) => {
  const { title, show, setShow, icon, textareaConf, genres } = props;
  return (
    <Fragment>
      <SectionButton caption={title} icon={icon} onClick={() => setShow(true)} />
      <ModalForm
        title={title}
        show={show}
        onClose={() => setShow(false)}
        textareaConf={textareaConf}
      >
        {genres.map(({ id, section, label }) => (
          <SelectionOptionsForm
            key={id}
            genreId={id}
            section={section}
            genreName={label}
            isFormShow={show}
          />
        ))}
      </ModalForm>
    </Fragment>
  );
};

SectionForm.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  textareaConf: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }),
  icon: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default SectionForm;
