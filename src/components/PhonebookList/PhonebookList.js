import React from "react";
import PhonebookItem from "../PhonebookItem/PhonebookItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const PhonebookList = ({ contacts, title, onDeleteList }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <PhonebookItem
            key={id}
            name={name}
            number={number}
            onDeleteList={() => onDeleteList(id)}
          />
        ))}
      </ul>
    </div>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteList: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
