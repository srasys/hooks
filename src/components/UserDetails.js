import React from "react";
import { useParams } from "react-router-dom";

import { usersData } from "./usersData";

const UserDetails = () => {
  const { userId } = useParams();
  console.log(userId, "userId");
  const UserDetailsData = usersData.find((eachUser) => eachUser.id === userId);
  console.log(UserDetailsData, "UserDetailsData");
  return (
    <div>
        <div>
        Users UserDetails :
        </div>
        
      <h1>
       
        {UserDetailsData.name }
      </h1>
      <h1>
        { UserDetailsData.email}
      </h1>
      <h1>
       
        {UserDetailsData.username}
      </h1>
    </div>
  );
};
export default UserDetails;
