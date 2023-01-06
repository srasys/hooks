import React, { useState } from "react";

const Example5 = () => {
  const tempList = [
    {
      text: "123",
      id: "123",
    },
    {
      text: "456",
      id: "456",
    },
  ];
  const [list, setList] = useState([]);
  const [message, setMesage] = useState({
    text: "",
    id: "",
  });
  const [editingItem, setEditingItem] = useState({
    id: "",
    isediting: false,
  });
  const changeMessage = (e) => {
    setMesage({
      ...message,
      text: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    console.log(newTodo, "");
    setList([...list, newTodo]);
    setMesage({
      text: "",
      id: "",
    });
  };

  const deleteItem = (newid) => {
    console.log(newid);

    const newList = list.filter((item) => {
      return item.id !== newid;
    });
    console.log(newList);
    setList(newList);
  };
  const changeEditState = (id) => {
    console.log(id);
    setEditingItem({
      ...editingItem,
      id: id,
      isediting: true,
    });
    let editableitem = list.find((eachItem) => eachItem.id === id);
    console.log(editableitem);
    setMesage({
      ...message,
      text: editableitem.text,
      id: editableitem.id,
    });
  };
  const handleedit = (e) => {
    e.preventDefault();
    let newTodos = list.map((eachItem) => {
      if (eachItem.id === editingItem.id) {
        return {
          text: message.text,
          id: message.id,
        };
      } else {
        return eachItem;
      }
    });
    console.log(newTodos, "current tods");
    setList(newTodos);
    setMesage({
      text: "",
      id: "",
    });
    setEditingItem({
      id: "",
      isediting: false,
    });
  };

  return (
    <div>
      <form>
        <input
          type={"text"}
          name="mesage"
          id="message"
          placeholder="enter your message"
          value={message.text}
          onChange={changeMessage}
        />
        {editingItem.isediting ? (
          <button type="submit" onClick={handleedit}>
            Edit
          </button>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        )}
      </form>

      <hr />
      <ul>
        {list.length ? (
          list.map((eachItem) => {
            const { text, id } = eachItem;
            return (
              <li key={id}>
                <span>{text}</span>
                <button
                  onClick={() => {
                    changeEditState(id);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    deleteItem(id);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })
        ) : (
          <h1>no data in list</h1>
        )}
      </ul>
    </div>
  );
};
export default Example5;
