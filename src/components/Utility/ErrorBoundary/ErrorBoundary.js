import React, { Component } from "react";
import Error from "../Error/Error";

class ErrorBundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    let cmp = this.props.children;
    if (this.state.hasError) cmp = <Error />;
    return cmp;
  }
}

export default ErrorBundary;
