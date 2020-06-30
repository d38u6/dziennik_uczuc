import React from "react";
import PropTypes from "prop-types";
import ChartApex from "react-apexcharts";

import ChartBody from "./ChartSection/ChartBody/ChartBody";

const Chart = ({ id, desc, options, data, categories }) => {
  const chartOptions = {
    chart: {
      id,
      type: "bar",
    },
    xaxis: {
      categories,
    },
    ...options,
  };
  const series = [
    {
      name: desc,
      data,
    },
  ];
  return (
    <ChartBody>
      <ChartApex options={chartOptions} series={series} type="bar" width="100%" />
    </ChartBody>
  );
};

Chart.propTypes = {
  id: PropTypes.string.isRequired,
  desc: PropTypes.string,
  options: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.number),
  categories: PropTypes.array,
};

export default Chart;
