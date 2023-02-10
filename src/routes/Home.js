import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store.js";
import ToDo from "../components/ToDo.js";

const Home = (props) => {
  const toDocs = props.toDocs;
  const addToDo = props.addToDo;
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    addToDo(text);
    setText("");
  }
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add </button>
      </form>
      <ul>
        {toDocs.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
        {/* {JSON.stringify(toDocs)} */}
      </ul>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  // mapStateToProps
  return { toDocs: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
