import React, { useEffect, useReducer,useState } from "react";

const reducer = (state, action) => {
  if (action.type === "UPDATE_USERS_DATA") {
    return {
      ...state,
      usersData: action.payload,
    };
  } else if (action.type === "LOADING") {
    return {
      ...state,
      isLoading: action.payload,
    };
  } else if (action.type === "DELETE_USERS") {
    const newUsers = state.usersData.filter(
      (eachUser) => eachUser.id !== action.payload
    );
    return {
      ...state,
      usersData: newUsers,
    };
  } else if (action.type === "UPDATE_USER") {
    const newUsers = state.usersData.map((eachUser) => {
        if (eachUser.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            email: action.payload.email,
          };
        } else {
          return eachUser;
        }
      });
      return {
        ...state,
        usersData: newUsers,
      };
  } else if (action.type === "EDIT_USERS") {
    return {
      ...state,
      isEditing: action.payload,
    };
  }

  return state;
};

const Index = () => {
  const fetchUserData = async (url) => {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    dispatch({
      type: "ERROR",
      payload: {
        status: false,
        msg: "",
      },
    });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "UPDATE_USERS_DATA",
        payload: data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      dispatch({
        type: "ERROR",
        payload: {
          status: false,
          msg: "",
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: {
          status: false,
          msg: error.message || "",
        },
      });
    }
  };

  useEffect(() => {
    fetchUserData("https://jsonplaceholder.typicode.com/users");
  }, []);

  const initialState = {
    usersData: [],
    isloading: false,
    isError: {
      status: false,
      msg: "",
    },
    isEditing: { status: false, id: "", name: "", email: "" },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEdit = (id, name, emaild) => {
    dispatch({
      type: "EDIT_USERS",
      payload: { status: true, id: id, name: name, email:emaild },
    });
  };
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_USERS",
      payload: id,
    });
  };
  const updateData = (id, name, email) => {
    dispatch({
      type: "UPDATE_USER",
      payload: {
        id,
        name,
        email,
      },
    });
    dispatch({
      type: "EDIT_USERS",
      payload: { status: false, id: "", name: "", email: "" },
    });
  };

  if (state.isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div>
         {state.isEditing?.status && (
        <EditFormContainer
          id={state.isEditing.id}
          comingTitle={state.isEditing.name}
          comingEmail={state.isEditing.email}
          updateData={updateData}
        />
      )}
      {state?.usersData.map((eachItem) => {
        const { id, name, email } = eachItem;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{email}</p>
            <div>
              <button
                onClick={() => {
                  handleEdit(id, name, email);
                }}
              >
                edit
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                delete
              </button>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const EditFormContainer = ({ id, comingTitle, comingEmail, updateData }) => {
    const [title, setTitle] = useState(comingTitle || "");
    const [email, setEmail] = useState(comingEmail || "");
  
    return (
      <>
        <form>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => updateData(id, title, email)}>
            update data
          </button>
        </form>
      </>
    );
  };
  
export default Index;
