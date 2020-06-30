import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addSelectionOption,
  removeSelectionOption,
  addAlert,
} from "../../../../../store/actions";
import shortid from "shortid";

import EditForm from "../../../../../components/AddRecord/Sections/Section/SectionForm/CollapsibleCheckboxesForm/EditForm/EditForm";

export class EditOptionsForm extends Component {
  state = {
    options: [],
    textareaValue: "",
    selectionOptions: [],
    formShow: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selectionOptions !== state.selectionOptions) {
      const options = props.selectionOptions.filter(
        ({ genre }) => genre === props.genreId
      );
      return { ...state, options, selectionOptions: props.selectionOptions };
    }
    return state;
  }

  shouldComponentUpdate(_, { formShow }) {
    return formShow !== this.state.formShow || this.state.formShow;
  }

  setFormShow = (formShow) => this.setState({ formShow });

  textareaChangeHandler = (e) => {
    this.setState({ textareaValue: e.target.value });
  };

  removeOptionHandler = (optId) => {
    if (
      this.props.sectionsValues[this.props.section]?.find(({ id }) => id === optId)
    ) {
      return this.props.addAlert({
        content: "Nie możesz usunąć aktualnie wybranej opcji",
        type: "Warning",
      });
    }
    this.props.removeOption(optId);
  };

  addOptionHandler = () => {
    if (this.state.textareaValue.trim().length < 1) {
      return this.props.addAlert({
        content: "Uzpełnij treść nowej opcji",
        type: "Warning",
      });
    }
    this.props.addOption({
      id: shortid.generate(),
      value: this.state.textareaValue,
      genre: this.props.genreId,
      section: this.props.section,
    });
    this.setState({ textareaValue: "" });
  };

  render() {
    return (
      <EditForm
        title={`Edytuj ${this.props.genreName}`}
        show={this.state.formShow}
        setShow={this.setFormShow}
        options={this.state.options}
        onAdd={this.addOptionHandler}
        onRemove={this.removeOptionHandler}
        textareaConf={{
          value: this.state.textareaValue,
          onChange: this.textareaChangeHandler,
          placeholder: "Treść nowej opcji",
        }}
      />
    );
  }
}

EditOptionsForm.propTypes = {
  genreId: PropTypes.string.isRequired,
  genreName: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  //redux
  selectionOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
    })
  ).isRequired,
  sectionsValues: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        color: PropTypes.string,
      })
    )
  ),
  addOption: PropTypes.func.isRequired,
  removeOption: PropTypes.func.isRequired,
  addAlert: PropTypes.func.isRequired,
};

const mapStateToProps = ({ selectionOptions, sectionsValues }) => ({
  selectionOptions,
  sectionsValues,
});

const mapDispatchToProps = (dispatch) => ({
  addOption: (option) => dispatch(addSelectionOption(option)),
  removeOption: (optId) => dispatch(removeSelectionOption(optId)),
  addAlert: (alert) => dispatch(addAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditOptionsForm);
