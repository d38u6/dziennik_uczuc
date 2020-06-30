import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addRecord, addAlert, initSectionValues } from "../../store/actions";
import shortid from "shortid";

import Sections from "../../components/AddRecord/Sections/Sections";
import AddRecordButton from "../../components/AddRecord/AddRecordButton/AddRecordButton";

import SECTIONS from "../../data/sectionsData";

export class AddRecord extends Component {
  constructor(props) {
    super(props);
    this.state = { reRender: false };
    this.initSectionsValues();
  }

  componentDidUpdate() {
    if (this.state.reRender) {
      this.initSectionsValues();
      this.setState({ reRender: false });
    }
  }

  initSectionsValues() {
    SECTIONS.forEach(({ id }) => this.props.initSectionValues(id));
  }

  allowSubmit() {
    const feelings = !!this.props.sectionsValues.feelings
      .reduce((pv, cv) => pv + cv.value, "")
      .trim();
    const situation = !!this.props.sectionsValues.situation
      .reduce((pv, cv) => pv + cv.value, "")
      .trim();
    const though = !!this.props.sectionsValues.though
      .reduce((pv, cv) => pv + cv.value, "")
      .trim();

    return feelings && (situation || though);
  }

  addRecordHandler = () => {
    if (!this.allowSubmit())
      return this.props.addAlert({
        content:
          "Aby dodać wpis, musisz uzupełnić kategorie Sytuacji lub myśli i kategorie uczuć",
        type: "Warning",
      });

    this.props.addRecord({
      id: shortid.generate(),
      date: Date.now(),
      sections: this.props.sectionsValues,
    });

    this.props.addAlert({
      content: "Wpis dodany pomyślnie",
      type: "Success",
    });

    this.setState({ reRender: true });
  };

  render() {
    return (
      !this.state.reRender && (
        <Fragment>
          <Sections sections={SECTIONS} />
          <AddRecordButton onClick={this.addRecordHandler} />
        </Fragment>
      )
    );
  }
}

const mapStateToProps = ({ sectionsValues }) => ({ sectionsValues });

const mapDispatchToProps = (dispatch) => ({
  addRecord: (record) => dispatch(addRecord(record)),
  addAlert: (alert) => dispatch(addAlert(alert)),
  initSectionValues: (id) => dispatch(initSectionValues(id)),
});

AddRecord.propTypes = {
  //redux
  sectionsValues: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
        color: PropTypes.string,
      })
    )
  ).isRequired,
  addRecord: PropTypes.func.isRequired,
  addAlert: PropTypes.func.isRequired,
  initSectionValues: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecord);
