import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeAlert } from "../../store/actions";
import Alert from "../../components/PaperCSS/Alert/Alert";
import Row from "../../components/PaperCSS/Layout/Row/Row";

export class Alerts extends Component {
  renderAlert = ({ id, content, type, showMs }) => (
    <Alert
      key={id}
      content={content}
      type={type}
      onClose={() => this.props.onRemoveAlert(id)}
      showMs={showMs}
    />
  );
  render() {
    return <Row position="Spaces">{this.props.alerts.map(this.renderAlert)}</Row>;
  }
}

Alerts.propTypes = {
  //redux;
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string,
      type: PropTypes.oneOf([
        "Primary",
        "Secondary",
        "Success",
        "Warning",
        "Danger",
      ]),
      showMs: PropTypes.number,
    })
  ).isRequired,
  onRemoveAlert: PropTypes.func,
};

const mapStateToProps = ({ alerts }) => ({ alerts });

const mapDispatchToProps = (dispatch) => ({
  onRemoveAlert: (id) => dispatch(removeAlert(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
