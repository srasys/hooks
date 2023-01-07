import React from "react";
import { usersData } from "./usersData";
import { Link } from "react-router-dom";

const UsersList = () => {
  return (
    <div>
      <h1>Users Data</h1>
      <div className="card-container">
        {usersData.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <Link key={id} to={`/users/${id}`}>
              <article className="card">
                <h3>{name}</h3>
                <h3>{email}</h3>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default UsersList;
