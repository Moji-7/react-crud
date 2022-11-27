import React, { useEffect, useRef } from "react";

export const Focus = () => {
  let searchBox = useRef();
  useEffect(() => {
    searchBox.current.value="aaa";
    searchBox.current.focus()
    //inputSearch.Focus();
    //console.log(inputSearch)
  }, []);
  return (
    <>
      <input ref={searchBox} />
    </>
  );
};
