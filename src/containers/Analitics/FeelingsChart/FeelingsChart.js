import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ChartWithTimeScope from "../ChartWithTimeScope/ChartWithTimeScope";

export class FeelingsChart extends Component {
  chartOptions = {
    plotOptions: {
      bar: {
        distributed: true,
        barHeight: "100%",
      },
    },
    colors: ["#ffc400", "#cf5300", "#f30000", "#7e7877", "#66DA26"],
    legend: {
      show: true,
      position: "top",
      floating: true,
    },
  };

  mapFeelingsName = new Map([
    ["fear", "Lęk"],
    ["shame", "Wstyd"],
    ["anger", "Złość"],
    ["sadness", "Smutek"],
    ["joy", "Radość"],
  ]);

  state = { timeScope: { start: 0, end: 0, listOfDays: [] } };

  *extractListOfFeelingsFromRecord(record) {
    for (let feeling of record.sections.feelings) {
      yield this.props.selectionOptions.find(({ id }) => id === feeling.id)?.genre ||
        "";
    }
  }

  countFeelingsInDay(day) {
    const feelings = {};
    for (let record of day.records) {
      [
        ...new Set(this.extractListOfFeelingsFromRecord(record)),
      ].forEach((feelName) =>
        feelings[feelName] ? feelings[feelName]++ : (feelings[feelName] = 1)
      );
    }
    return feelings;
  }

  prepareFeelingsObject = () => {
    const feelings = {};
    this.mapFeelingsName.forEach((name) => (feelings[name] = 0));
    return feelings;
  };

  countFeelingsInDays = (days) => {
    const feelings = this.prepareFeelingsObject();
    for (let day of days) {
      const feelingsInDay = this.countFeelingsInDay(day);
      for (let [name, amount] of Object.entries(feelingsInDay)) {
        name = this.mapFeelingsName.get(name);
        if (name)
          feelings[name] ? (feelings[name] += amount) : (feelings[name] = amount);
      }
    }
    return feelings;
  };

  selectDays = () => {
    const listOfDays = this.state.timeScope.listOfDays.map((d) =>
      new Date(d).toLocaleDateString()
    );
    return this.props.daysRecords.filter(({ date }) =>
      listOfDays.includes(new Date(date).toLocaleDateString())
    );
  };

  timeScopeChangeHandler = (scope) => {
    this.setState({ timeScope: scope });
  };

  render() {
    const selectedDays = this.selectDays();
    const feelings = this.countFeelingsInDays(selectedDays);

    return (
      <ChartWithTimeScope
        id="feelingsChart"
        title="Częstotliwość odczuwanych uczuć"
        desc="Częstotliwość odczuwanych uczuć"
        options={this.chartOptions}
        data={feelings}
        onTimeScopeChange={this.timeScopeChangeHandler}
      />
    );
  }
}

FeelingsChart.propTypes = {
  daysRecords: PropTypes.arrayOf(
    PropTypes.shape({
      dateString: PropTypes.string,
      date: PropTypes.number.isRequired,
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
          ),
        })
      ),
    })
  ).isRequired,
  //redux
  selectionOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = ({ selectionOptions }) => ({ selectionOptions });

export default connect(mapStateToProps)(FeelingsChart);
