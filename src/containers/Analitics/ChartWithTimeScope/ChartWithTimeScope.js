import React, { Component } from "react";
import PropTypes from "prop-types";
import Chart from "./Chart/Chart";
import TimeScopeSelector from "./TimeScopeSelector/TimeScopeSelector";

class ChartWithTimeScope extends Component {
  render() {
    const { onTimeScopeChange, ...rest } = this.props;
    return (
      <Chart {...rest}>
        <TimeScopeSelector onScopeChange={onTimeScopeChange} />
      </Chart>
    );
  }
}

ChartWithTimeScope.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  options: PropTypes.object,
  data: PropTypes.object.isRequired,
  onTimeScopeChange: PropTypes.func,
};

export default ChartWithTimeScope;
