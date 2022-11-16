import React from "react";
import { useState, useEffect, useMemo } from "react";
import RadioList from "./RadioList";

export const Alert = () => {
  const [counter, setCounter] = useState(0);
  const [gender, setGender] = useState();
  const [features, setfeatures] = useState();
  const [myOptions, setMyOptions] = useState([]);

  const allOptions = ["books", "films", "sport"];

  const changed = (event, heavy) => {
    const { name, value } = event.target;

    if (name === "name") setCounter(counter + 1);
    // getDd();
    // heavyFunction();
  };
  const getData = () => {
    setInterval(() => {
      console.log(counter);
    }, 2000);
  };
  const getDd = () => {
    console.log(counter);
    //return memoGetData;
  };
  useEffect(() => {
    getDd();
    return () => {};
  }, [counter]);

  const heavyFunction = () => {
    console.log(counter);
  };
  const handleCheck = (e) => {
    const { value, checked } = e.target;
    var updateList = [...myOptions];
    if (checked) updateList = [...myOptions, value];
    else updateList.splice(myOptions.indexOf(value), 1);
    setMyOptions(updateList);
  };

  const selectedClass = (item) => (myOptions.includes(item) ? "bg-red" : "");

  const selectedOptions = myOptions.length
    ? myOptions.reduce((all, x) => {
        return all + " " + x;
      })
    : "";
  // useMemo(() => getData(), [counter]);

  return (
    <>
 

      {/* <input
        onChange={(e) => changed(e)}
        name="name"
        placeholder="name"
      ></input>  */}
      {counter}
      <table>
        <tr>
          <td>
            <h2>gender</h2>
            <input
              onChange={(e) => changed(e)}
              placeholder="gender"
              type="ra"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <h2>needs</h2>
            {allOptions.map((item, index) => (
              <div key={item}>
                <input
                  type="checkbox"
                  value={item}
                  onChange={(e) => handleCheck(e)}
                />
                <span className={selectedClass(item)}>{item}</span>
              </div>
            ))}
            <div>
              selected my options are:
              {selectedOptions}
            </div>
          </td>
        </tr>
        <tr>
          <td>
          
              <RadioList />
           
          </td>
        </tr>
      </table>
    </>
  );
};
