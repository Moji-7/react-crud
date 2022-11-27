import React, { useEffect, useState } from "react";

const WindowEvent = () => {
  const [eventEnable, setEventEnable] = useState(false);
  const handleClick = () => {
    setEventEnable((prev) => !prev);
  };

  // in parent

  //   const setEvent = () => {
  //     console.log(eventEnable);
  //     if (eventEnable) window.addEventListener("click", handleDoubleClick);
  //     else window.removeEventListener("click", handleDoubleClick);
  //   };
  useEffect(() => {
    const handleDoubleClick = () => console.log("ali");

    window.addEventListener("dblclick", handleDoubleClick);
    return () =>
      // setEvent();
      window.removeEventListener("dblclick", handleDoubleClick);
  }, []);

  return (
    <>
      window event
      <button onClick={handleClick}>click to enable</button>
      {eventEnable.toString()}
    </>
  );
};

export default WindowEvent;
