import React from "react";
import PropTypes from "prop-types";

import Collapsible from "../../../../../PaperCSS/UI/Collapsible/Collapsible";
import Checkbox from "../../../../../PaperCSS/Form/Checkbox/Checkbox";

const CollapsibleCheckboxesForm = (props) => {
  const { caption, open, toggleOpen, checkboxesConf, children } = props;
  return (
    <Collapsible title={caption} open={open} onToggleOpen={toggleOpen}>
      {checkboxesConf.checkboxes.map(({ id, value, checked }) => (
        <Checkbox
          key={id}
          id={id}
          caption={value}
          checked={checked}
          disabled={checkboxesConf.disabled}
          onChange={(e) => checkboxesConf.onChange(e, id)}
        />
      ))}
      {children}
    </Collapsible>
  );
};

CollapsibleCheckboxesForm.propTypes = {
  caption: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  checkboxesConf: PropTypes.shape({
    checkboxes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string,
        checked: PropTypes.bool.isRequired,
      })
    ),
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  }),
};

export default CollapsibleCheckboxesForm;
