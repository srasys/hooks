import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  if (action.type === "DELETE_PERSON") {
    const newPersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    return {
      ...state,
      data: newPersons,
      length: state.length - 1,
    };
  }

  return state;
};
const initialState = {
  data: [
    {
      id: 1,
      firstName: "hi",
      email: "hi@gmail.com",
    },
    {
      id: 2,
      firstName: "hi1",
      email: "hwi@gmail.com",
    },
  ],
  length:2
};
const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };
  const handleEdit = (id) => {
    console.log(id);
    dispatch({
      type: "EDIT_PERSON",
      payload: id,
    });
  };
  return (
    <div>
      {state.data.map((eachItem) => {
        const { id, firstName, email } = eachItem;

        return (
          <div key={id}>
            <h3>{firstName}</h3>
            <h3>{email}</h3>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                handleEdit(id);
              }}
            >
              edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
