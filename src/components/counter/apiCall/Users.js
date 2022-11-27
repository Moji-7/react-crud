import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
//import useUserData from "./useUserData";
import useFetch from "./useFetch";

export const Users = () => {
  let textInput = React.createRef();
  const [users, setUsers] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");

  // let res = await useUserData(titleFilter);
  // let res =  useFetch(titleFilter);
  // setUsers(res);

  const { _users } = useFetch();
  setUsers(_users);
  console.log(users)
  const handleSearch = (e) => {
    e.preventDefault();
    setTitleFilter(textInput.current.value);
  };

  return (
    <>
      <div>list of users:</div>
      <div>
        <input name="title" ref={textInput} />
        <button onClick={(e) => handleSearch(e)}>search for title</button>
        {titleFilter}
      </div>
      {users.length > 0 &&
        users.map((user) => {
          return <span key={user.id}>{user.id}</span>;
        })}
    </>
  );
};
