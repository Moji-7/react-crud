import axios from "axios";
import { useEffect, useState } from "react";


const useUserData = (query) => {
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    //const result = getUsers();
  
  }, [query]);

  return null;
};

export default useUserData;
