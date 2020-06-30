import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { readJsonFile, saveDataToFile } from "../../../utility/fileManger";
import { setSelectionOptions, addAlert } from "../../../store/actions";
import defaultSelectionOptions from "../../../data/defaultSelectionOptions";

import OptionsWrapper from "../../../components/Options/OptionsWrapper/OptionsWrapper";
import OptionButton from "../../../components/Options/OptionButton/OptionButton";
import ConfirmModal from "../../../components/UI/ConfirmModal/ConfirmModal";

export class SelectionOptionsOptions extends Component {
  state = { restoreDefaultModalShow: false };
  validOptions = (options) => {
    for (let option of options) {
      if (
        typeof option.id !== "string" ||
        typeof option.value !== "string" ||
        typeof option.genre !== "string" ||
        typeof option.section !== "string"
      )
        return false;
    }
    return true;
  };
  importChangeHandler = async (e) => {
    const options = await readJsonFile(e.target.files[0]);
    if (!options || options.length < 1 || !this.validOptions(options)) {
      this.props.addAlert({ content: "Wybrano zły plik", type: "Danger" });
    } else {
      this.props.setSelectionOptions(options);
      this.props.addAlert({
        content: "Opcje wyboru zostały poprawnie zaimportowane",
        type: "Success",
      });
    }
  };

  exportClickHandler = () => {
    if (!this.props.selectionOptions || this.props.selectionOptions.length < 1) {
      this.props.addAlert({
        content: "Brak opcji wyboru to wyeksportowania",
        type: "Danger",
      });
    } else {
      saveDataToFile(
        JSON.stringify(this.props.selectionOptions),
        `dziennik-uczuc-opcje-wyboru-${new Date(Date.now()).toLocaleString()}.json`
      );
      this.props.addAlert({
        content: "Opcje wyboru poprawnie wyeksportowane",
        type: "Success",
      });
    }
  };

  onRestoreDefault = () => {
    this.setState({ restoreDefaultModalShow: false });
    this.props.setSelectionOptions(defaultSelectionOptions);
    this.props.addAlert({
      content: "Opcje wyboru poprawnie przywrócone",
      type: "Success",
    });
  };
  render() {
    return (
      <OptionsWrapper title="Edytuj opcje wyboru">
        <OptionButton
          capiton="Importuj"
          type="Secondary"
          icon="FaFileImport"
          fileButton
          onChange={this.importChangeHandler}
        />
        <OptionButton
          capiton="Eksportuj"
          type="Secondary"
          icon="FaFileExport"
          onClick={this.exportClickHandler}
        />
        <OptionButton
          capiton="Przywróć domyśle opcje wyboru"
          type="Danger"
          icon="GiRecycle"
          onClick={() => this.setState({ restoreDefaultModalShow: true })}
        />
        <ConfirmModal
          show={this.state.restoreDefaultModalShow}
          content="Przywracanie danych jest nieodwracalne i spowoduje utratę, dodanych opcji wyboru. Czy chcesz kontynuować?"
          onClose={() => this.setState({ restoreDefaultModalShow: false })}
          onAccept={this.onRestoreDefault}
        />
      </OptionsWrapper>
    );
  }
}

SelectionOptionsOptions.propTypes = {
  //redux
  selectionOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      genre: PropTypes.string,
      section: PropTypes.string,
    })
  ),

  setSelectionOptions: PropTypes.func,
  addAlert: PropTypes.func,
};

const mapStateToProps = ({ selectionOptions }) => ({ selectionOptions });

const mapDispatchToProps = (dispatch) => ({
  setSelectionOptions: (options) => dispatch(setSelectionOptions(options)),
  addAlert: (alert) => dispatch(addAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionsOptions);
