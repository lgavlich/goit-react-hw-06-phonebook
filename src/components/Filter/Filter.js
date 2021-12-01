import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import actions from "../../redux/contacts-actions";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={s.filter}>
      <p className={s.title}>Find contacts by name </p>

      <input
        className={s.inputFilter}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(actions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
