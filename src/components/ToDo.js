import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text} <button onClick={onBtnClick}>delete</button>
    </li>
  );
};

function mapStateToProps(dispatch, ownProps) {
  return {
    onBtnClick: () =>
      dispatch(actionCreators.DeleteToDo(parseInt(ownProps.id))),
  };
}

export default connect(null, mapStateToProps)(ToDo);
