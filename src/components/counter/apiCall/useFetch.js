import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {

  const [users, setUsers] = useState();

  const callApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await axios.get(url);
    const result = await res.data;
    return result;
  };

  useEffect(() => { 
     console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
    callApi()
      .then((res) => {
        setUsers(res);
      })
      .catch((e) => {});
    //  setUsers(result);
  }, []);
  return { users };
};
export default useFetch;
