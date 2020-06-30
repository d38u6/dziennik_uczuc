import React, { Component } from "react";
import PropTypes from "prop-types";

import ChartWithTimeScope from "../ChartWithTimeScope/ChartWithTimeScope";

class RecordsPerDayChart extends Component {
  state = { timeScope: { start: 0, end: 0, listOfDays: [] } };

  timeScopeChangeHandler = (scope) => {
    this.setState({ timeScope: scope });
  };

  countRecordsPerDays() {
    const recordsPerDays = {};
    for (let date of this.state.timeScope.listOfDays) {
      const d = new Date(date);
      const labelDate = `${d.getDate()}/${d.getMonth() + 1}`;
      recordsPerDays[labelDate] =
        this.props.daysRecords.find(
          ({ dateString }) => dateString === d.toLocaleDateString()
        )?.records.length || 0;
    }
    return recordsPerDays;
  }

  render() {
    const recordsPerDays = this.countRecordsPerDays();
    return (
      <ChartWithTimeScope
        id="RecordsPerDay"
        title="Liczba wpisów dziennie"
        desc="liczba wpisów"
        data={recordsPerDays}
        onTimeScopeChange={this.timeScopeChangeHandler}
      />
    );
  }
}

RecordsPerDayChart.propTypes = {
  daysRecords: PropTypes.arrayOf(
    PropTypes.shape({
      dateString: PropTypes.string,
      date: PropTypes.number,
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
    })
  ),
};

export default RecordsPerDayChart;
