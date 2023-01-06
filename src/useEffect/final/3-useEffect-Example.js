import React, { useEffect, useState } from "react";

let apiurl = "https://jsonplaceholder.typicode.com/usrs";

const Index = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState({
    status: false,
    msg: "",
  });

  const fetchUsersData = async (url) => {
    setIsError({
      status: false,
      msg: "",
    });
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsersData(data);
      setLoading(false);
      setIsError({
        status: false,
        msg: "",
      });
      if (response.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "something went wrong ",
      });
    }
  };

  useEffect(() => {
    fetchUsersData(apiurl);
  }, []);

  if (loading) {
    return (
      <div>
        <h3>loading</h3>
      </div>
    );
  }

  if (isError?.status) {
    return (
      <div>
        <h2 style={{ color: "red" }}>{isError.msg}</h2>
      </div>
    );
  }
  return (
    <div>
      <h1>example - 1</h1>
      <ul>
        {usersData?.map((eachItem) => {
          const { name, email, id } = eachItem;
          return (
            <li key={id}>
              <div>
                <span>{name}</span>
              </div>
              <div>
                <span>{email}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Index;
