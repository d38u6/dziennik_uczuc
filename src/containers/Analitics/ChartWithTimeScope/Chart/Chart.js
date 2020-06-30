import React, { Component } from "react";
import PropTypes from "prop-types";

import ChartSection from "../../../../components/Analitics/Chart/ChartSection/ChartSection";
import ChartHeader from "../../../../components/Analitics/Chart/ChartSection/ChartHeader/ChartHeader";
import ChartUI from "../../../../components/Analitics/Chart/Chart";

class Chart extends Component {
  createChartData(data) {
    const arrayData = [];
    const categories = [];
    for (let [name, amount] of Object.entries(data)) {
      arrayData.push(amount);
      categories.push(name);
    }
    return { data: arrayData, categories };
  }
  render() {
    const { title, id, desc, options } = this.props;
    const { data, categories } = this.createChartData(this.props.data);
    return (
      <ChartSection>
        <ChartHeader title={title}>{this.props.children}</ChartHeader>
        <ChartUI
          id={id}
          desc={desc}
          options={options}
          data={data}
          categories={categories}
        />
      </ChartSection>
    );
  }
}

Chart.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  options: PropTypes.object,
  data: PropTypes.object.isRequired,
};

export default Chart;
