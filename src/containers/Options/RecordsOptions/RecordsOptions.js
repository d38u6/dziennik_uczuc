import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addAlert, setRecords, removeAllRecords } from "../../../store/actions";
import { readJsonFile, saveDataToFile } from "../../../utility/fileManger";
import OptionsWrapper from "../../../components/Options/OptionsWrapper/OptionsWrapper";
import OptionButton from "../../../components/Options/OptionButton/OptionButton";
import ConfirmModal from "../../../components/UI/ConfirmModal/ConfirmModal";

export class RecordsOptions extends Component {
  state = { removeAllModalShow: false };
  validRecords(records) {
    for (let record of records) {
      if (
        typeof record.id !== "string" ||
        typeof record.date !== "number" ||
        typeof record.sections !== "object"
      )
        return false;
    }
    return true;
  }

  importChangeHandler = async (e) => {
    const records = await readJsonFile(e.target.files[0]);
    if (!records || records.length < 1 || !this.validRecords(records)) {
      this.props.addAlert({ content: "Wybrano zły plik", type: "Danger" });
    } else {
      this.props.setRecords(records);
      this.props.addAlert({
        content: "Wpisy zostały poprawnie zaimportowane",
        type: "Success",
      });
    }
  };

  exportClickHandler = () => {
    if (!this.props.records || this.props.records.length < 1) {
      this.props.addAlert({
        content: "Brak wpisów to wyeksportowania",
        type: "Danger",
      });
    } else {
      saveDataToFile(
        JSON.stringify(this.props.records),
        `dziennik-uczuc-wpisy-${new Date(Date.now()).toLocaleString()}.json`
      );
      this.props.addAlert({
        content: "Wpisy zostały poprawnie wyeksportowane",
        type: "Success",
      });
    }
  };

  removeAllHandler = () => {
    this.setState({ removeAllModalShow: false });
    this.props.removeAllRecords();
    this.props.addAlert({
      content: "Wszystkie wpisy zostały poprawnie usunięte",
      type: "Success",
    });
  };

  render() {
    return (
      <OptionsWrapper title="Edytuj wpisy">
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
          capiton="Usuń wszystkie wpisy"
          type="Danger"
          icon="FaTrash"
          onClick={() => this.setState({ removeAllModalShow: true })}
        />
        {
          <ConfirmModal
            show={this.state.removeAllModalShow}
            content="Dane zostaną usuniętę nieodwracalnie, chcesz kontynuować?"
            onClose={() => this.setState({ removeAllModalShow: false })}
            onAccept={this.removeAllHandler}
          />
        }
      </OptionsWrapper>
    );
  }
}

const mapStateToProps = ({ records }) => ({ records });

const mapDispatchToProps = (dispatch) => ({
  addAlert: (alert) => dispatch(addAlert(alert)),
  setRecords: (records) => dispatch(setRecords(records)),
  removeAllRecords: () => dispatch(removeAllRecords()),
});

RecordsOptions.propTypes = {
  //redux
  records: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      id: PropTypes.string,
      sections: PropTypes.objectOf(
        PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            value: PropTypes.string,
            color: PropTypes.string,
          })
        )
      ),
    })
  ),
  addAlert: PropTypes.func.isRequired,
  setRecords: PropTypes.func.isRequired,
  removeAllRecords: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordsOptions);
