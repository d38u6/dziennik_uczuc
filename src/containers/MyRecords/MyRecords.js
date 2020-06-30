import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeRecord } from "../../store/actions";

import Day from "../../components/MyRecords/Day/Day";
import Record from "../../components/MyRecords/Day/Record/Record";
import NoData from "../../components/Utility/NoData/NoData";
import PaginationControls from "../../components/MyRecords/PaginationControls/PaginationControls";
import mapRecordsToDaysRecords from "../../utility/mapRecordsToDaysRecords";

export class MyRecords extends Component {
  state = { days: [], prevRecords: [], currentPage: 0, daysPerPage: 7 };

  static getDerivedStateFromProps({ records }, state) {
    if (state.prevRecords !== records) {
      const days = mapRecordsToDaysRecords(records, true);
      return { ...state, days, prevRecords: records };
    }
    return state;
  }

  nextPage = () => {
    if (
      this.state.currentPage <
      Math.ceil(this.state.days.length / this.state.daysPerPage)
    ) {
      this.setState(({ currentPage }) => ({ currentPage: currentPage + 1 }));
    }
  };

  prevPage = () => {
    if (this.state.currentPage > 0) {
      this.setState(({ currentPage }) => ({ currentPage: currentPage - 1 }));
    }
  };

  render() {
    let daysRecords = <NoData />;
    if (this.state.days.length > 0) {
      daysRecords = (
        <Fragment>
          {this.state.days
            .slice(
              this.state.currentPage * this.state.daysPerPage,
              this.state.currentPage * this.state.daysPerPage +
                this.state.daysPerPage
            )
            .map(({ dateString, records }) => (
              <Day key={dateString} date={dateString}>
                {records.map((record) => (
                  <Record
                    key={record.id}
                    {...record}
                    remove={() => this.props.removeRecord(record.id)}
                  />
                ))}
              </Day>
            ))}
          <PaginationControls
            onPrev={this.prevPage}
            onNext={this.nextPage}
            allowPrev={this.state.currentPage > 0}
            allowNext={
              this.state.days.length / (this.state.currentPage + 1) >
              this.state.daysPerPage
            }
          />
        </Fragment>
      );
    }
    return <Fragment>{daysRecords}</Fragment>;
  }
}

MyRecords.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      sections: PropTypes.objectOf(
        PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            color: PropTypes.string,
          })
        )
      ).isRequired,
    })
  ),
  removeRecord: PropTypes.func,
};

const mapStateToProps = ({ records }) => ({ records });

const mapDispatchToProps = (dispatch) => ({
  removeRecord: (id) => dispatch(removeRecord(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyRecords);
