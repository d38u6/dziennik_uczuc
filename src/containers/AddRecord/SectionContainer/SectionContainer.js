import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addValue } from "../../../store/actions";

import Section from "../../../components/AddRecord/Sections/Section/Section";
import SectionForm from "../../../components/AddRecord/Sections/Section/SectionForm/SectionForm";
import SectionValues from "../../../components/AddRecord/Sections/Section/SectionValues/SectionValues";

import genresData from "../../../data/genresData";

export class SectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formShow: false,
      textareaValue: "",
      genres: genresData.filter(({ section }) => section === props.id),
    };
  }

  shouldComponentUpdate({ sectionsValues, id }, { formShow }) {
    return (
      sectionsValues[id] !== this.props.sectionsValues[id] ||
      formShow !== this.state.formShow ||
      this.state.formShow
    );
  }

  setFormShow = (formShow) => {
    this.setState({ formShow });
  };

  textareaChangeHandler = (e) => {
    this.setState({ textareaValue: e.target.value });
    this.props.addValue(this.props.id, {
      id: "textarea",
      value: e.target.value,
      color: null,
    });
  };

  render() {
    const { btnCaption, icon, desc } = this.props;
    const textareaConf = {
      value: this.state.textareaValue,
      onChange: this.textareaChangeHandler,
      placeholder: desc,
    };
    return (
      <Section>
        <SectionForm
          title={btnCaption}
          show={this.state.formShow}
          setShow={this.setFormShow}
          icon={icon}
          textareaConf={textareaConf}
          genres={this.state.genres}
        />
        <SectionValues values={this.props.sectionsValues[this.props.id]} />
      </Section>
    );
  }
}

SectionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  btnCaption: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  //redux
  sectionsValues: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        color: PropTypes.string,
      })
    )
  ).isRequired,
  addValue: PropTypes.func,
};

const mapStateToProps = ({ sectionsValues }) => ({ sectionsValues });

const mapDispatchToProps = (dispatch) => ({
  addValue: (sectionId, value) => dispatch(addValue(sectionId, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
