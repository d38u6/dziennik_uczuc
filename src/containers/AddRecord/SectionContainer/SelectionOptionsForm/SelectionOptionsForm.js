import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addValue, removeValue } from "../../../../store/actions";

import CollapsibleCheckboxesForm from "../../../../components/AddRecord/Sections/Section/SectionForm/CollapsibleCheckboxesForm/CollapsibleCheckboxesForm";
import EditOptionsForm from "./EditOptionsForm/EditOptionsForm";

import genresData from "../../../../data/genresData";

export class SelectionOptionsForm extends Component {
  state = { openCollapsible: false, checkboxes: [], selectionOptions: [] };

  static getDerivedStateFromProps(props, state) {
    if (props.selectionOptions !== state.selectionOptions) {
      const checkboxes = props.selectionOptions
        .filter(({ genre }) => genre === props.genreId)
        .map((opt) => {
          return {
            ...opt,
            checked:
              state.checkboxes.find(({ id }) => opt.id === id)?.checked || false,
          };
        });
      return { ...state, checkboxes, selectionOptions: props.selectionOptions };
    }
    return state;
  }

  shouldComponentUpdate({ isFormShow }, { openCollapsible }) {
    return (
      (isFormShow !== this.props.isFormShow || this.props.isFormShow) &&
      (openCollapsible !== this.state.openCollapsible || this.state.openCollapsible)
    );
  }

  defineColorValue = () =>
    genresData.find(({ id }) => this.props.genreId === id)?.color || null;

  changeCheckboxHandler = (e, boxId) => {
    const checkboxes = [...this.state.checkboxes];
    const boxIndex = checkboxes.findIndex(({ id }) => id === boxId);
    checkboxes[boxIndex] = { ...checkboxes[boxIndex], checked: e.target.checked };
    this.setState({
      checkboxes,
    });

    if (e.target.checked) {
      const value = {
        id: checkboxes[boxIndex].id,
        color: this.defineColorValue(),
        value: checkboxes[boxIndex].value,
      };
      this.props.addValue(this.props.section, value);
    } else {
      this.props.removeValue(this.props.section, boxId);
    }
  };

  toggleOpenHandler = () =>
    this.setState(({ openCollapsible }) => ({ openCollapsible: !openCollapsible }));

  render() {
    return (
      <CollapsibleCheckboxesForm
        caption={this.props.genreName}
        open={this.state.openCollapsible}
        toggleOpen={this.toggleOpenHandler}
        checkboxesConf={{
          checkboxes: this.state.checkboxes,
          onChange: this.changeCheckboxHandler,
          disabled: !this.props.isFormShow,
        }}
      >
        <EditOptionsForm
          genreId={this.props.genreId}
          genreName={this.props.genreName}
          section={this.props.section}
        />
      </CollapsibleCheckboxesForm>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addValue: (section, value) => dispatch(addValue(section, value)),
  removeValue: (section, valueId) => dispatch(removeValue(section, valueId)),
});

const mapStateToProps = ({ selectionOptions }) => ({ selectionOptions });

SelectionOptionsForm.propTypes = {
  genreId: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  genreName: PropTypes.string.isRequired,
  isFormShow: PropTypes.bool.isRequired,
  //REDUX PROPS
  selectionOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
    })
  ).isRequired,
  addValue: PropTypes.func.isRequired,
  removeValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionsForm);
