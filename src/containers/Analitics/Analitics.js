import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NoData from "../../components/Utility/NoData/NoData";

import mapRecordsToDaysRecords from "../../utility/mapRecordsToDaysRecords";
import FeelingsChart from "./FeelingsChart/FeelingsChart";
import RecordsPerDayChart from "./RecordsPerDayChart/RecordsPerDayChart";

export class Analitics extends Component {
  constructor(props) {
    super(props);
    this.state = { days: mapRecordsToDaysRecords(props.records) };
  }

  render() {
    let charts = <NoData />;
    if (this.state.days.length > 0) {
      charts = (
        <Fragment>
          <FeelingsChart daysRecords={this.state.days} />
          <RecordsPerDayChart daysRecords={this.state.days} />
        </Fragment>
      );
    }
    return <Fragment>{charts}</Fragment>;
  }
}

Analitics.propTypes = {
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
};

const mapStateToProps = ({ records }) => ({ records });

export default connect(mapStateToProps)(Analitics);
