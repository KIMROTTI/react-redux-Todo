import { type } from "@testing-library/user-event/dist/type";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const params = useParams();
  console.log(typeof params.id);
  console.log(toDos);

  const toDo = toDos.find((toDo) => toDo.id === parseInt(params.id));

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
