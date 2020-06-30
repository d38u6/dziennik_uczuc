import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Tabs from "../../../../components/PaperCSS/Tabs/Tabs";

export class TimeScopeSelector extends PureComponent {
  defaultScope = {
    start: Date.now() - 1000 * 60 * 60 * 24 * 7,
    end: Date.now(),
  };
  constructor(props) {
    super(props);

    this.state = {
      tabItems: [
        { id: "7days", caption: "7 Dni", active: true, value: 7 },
        { id: "10days", caption: "10 Dni", active: false, value: 10 },
        { id: "30days", caption: "30 Dni", active: false, value: 30 },
      ],
      scope: {
        ...this.defaultScope,
        listOfDays: [...this.createListOfDays(this.defaultScope)],
      },
    };
    this.props.onScopeChange(this.state.scope);
  }

  componentDidUpdate() {
    this.props.onScopeChange(this.state.scope);
  }

  *createListOfDays({ start, end }) {
    let time = end;
    while (time > start) {
      yield time;
      time -= 24 * 60 * 60 * 1000;
    }
  }

  createNewScope = (numberOfDays) => {
    const scope = {
      start: Date.now() - 24 * 60 * 60 * 1000 * numberOfDays,
      end: Date.now(),
    };

    return { ...scope, listOfDays: [...this.createListOfDays(scope)] };
  };

  tabClickHandler = (tabId) => {
    const tabItems = this.state.tabItems.map((item) => ({
      ...item,
      active: item.id === tabId,
    }));
    const numberOfDays = this.state.tabItems.find(({ id }) => id === tabId).value;
    const scope = this.createNewScope(numberOfDays);
    this.setState({ tabItems, scope });
  };

  getTabItemWithoutValue = ({ value, ...item }) => ({ ...item });

  render() {
    return (
      <Tabs
        items={this.state.tabItems.map(this.getTabItemWithoutValue)}
        onItemClick={this.tabClickHandler}
      />
    );
  }
}

TimeScopeSelector.propTypes = {
  onScopeChange: PropTypes.func,
};

export default TimeScopeSelector;
